using System.ComponentModel;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public ProductsController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("getproducts")]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts()
        {
            return Ok(await _repo.GetProductsAsync());
        }

        [HttpGet("getproduct/{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return Ok(await _repo.GetProductByIdAsync(id));
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetBrandsAsync()
        {
            return Ok(await _repo.GetProductBrandsAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetTypesAsync()
        {
            return Ok(await _repo.GetProductTypesAsync());
        }
    }
}