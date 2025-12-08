/* =========================
   DATA: PRODUCTS & SELLERS
   ========================= */
const PRODUCTS = [
  { id:1, name:"Oversized Sweater", price:85000, priceText:"Rp85.000", img:"img/product1.jpg", kategori:"Brand", gender:"Wanita", jenis:"Sweter", gaya:"Casual", warna:"Biru", sellerId:201, desc:"Sweater lembut, santai & nyaman."},
  { id:2, name:"Basic White Tee", price:55000, priceText:"Rp55.000", img:"img/product4.jpg", kategori:"Brand", gender:"Unisex", jenis:"Kaos", gaya:"Casual", warna:"Putih", sellerId:201, desc:"Kaos putih basic, nyaman."},
  { id:3, name:"Formal Grey Shirt", price:110000, priceText:"Rp110.000", img:"img/product5.jpg", kategori:"Brand", gender:"Pria", jenis:"Kemeja", gaya:"Formal", warna:"Abu-abu", sellerId:202, desc:"Kemeja slim-fit, cocok formal."},
  { id:4, name:"Classic Black Blazer", price:150000, priceText:"Rp150.000", img:"img/product6.jpg", kategori:"Brand", gender:"Wanita", jenis:"Blazer", gaya:"Formal", warna:"Hitam", sellerId:202, desc:"Blazer elegan untuk acara resmi."},
  { id:5, name:"Red Satin Party Dress", price:150000, priceText:"Rp180.000", img:"img/product7.jpg", kategori:"Cutting Brand", gender:"Wanita", jenis:"Dress", gaya:"Party", warna:"Merah", sellerId:203, desc:"Gaun satin berkilau untuk pesta."},
  { id:6, name:"Shiny Pink Skirt", price:90000, priceText:"Rp90.000", img:"img/product8.jpg", kategori:"Brand", gender:"Wanita", jenis:"Rok", gaya:"Party", warna:"Pink", sellerId:203, desc:"Rok pesta yang eye-catching."},
  { id:7, name:"Denim Jacket", price:120000, priceText:"Rp120.000", img:"img/product2.jpg", kategori:"Brand", gender:"Unisex", jenis:"Jaket", gaya:"Streetwear", warna:"Biru", sellerId:204, desc:"Denim jacket klasik."},
  { id:8, name:"Black Oversized Hoodie", price:85000, priceText:"Rp95.000", img:"img/product9.jpg", kategori:"No Brand", gender:"Pria", jenis:"Hoodie", gaya:"Streetwear", warna:"Hitam", sellerId:204, desc:"Hoodie oversized keren."},
  { id:9, name:"Floral Skirt", price:65000, priceText:"Rp65.000", img:"img/product3.jpg", kategori:"No Brand", gender:"Wanita", jenis:"Rok", gaya:"Vintage", warna:"Pink", sellerId:205, desc:"Rok motif bunga, vibe vintage."},
  { id:10, name:"Retro Brown Cardigan", price:100000, priceText:"Rp100.000", img:"img/product10.jpg", kategori:"Cutting Brand", gender:"Wanita", jenis:"Outer", gaya:"Vintage", warna:"Cokelat", sellerId:205, desc:"Cardigan retro hangat."},
  { id:11, name:"Training Jogger Pants", price:75000, priceText:"Rp75.000", img:"img/product11.jpg", kategori:"Brand", gender:"Unisex", jenis:"Celana", gaya:"Sporty", warna:"Abu-abu", sellerId:206, desc:"Jogger nyaman untuk olahraga."},
  { id:12, name:"Sporty White Tee", price:60000, priceText:"Rp60.000", img:"img/product12.jpg", kategori:"No Brand", gender:"Pria", jenis:"Kaos", gaya:"Sporty", warna:"Putih", sellerId:206, desc:"Kaos sporty breathable."},
  { id:13, name:"Korean Overshirt", price:130000, priceText:"Rp130.000", img:"img/product13.jpg", kategori:"Brand", gender:"Unisex", jenis:"Outer", gaya:"Casual", warna:"Abu-abu", sellerId:201, desc:"Overshirt ala Korea."},
  { id:14, name:"Polka Dot Dress", price:95000, priceText:"Rp95.000", img:"img/product14.jpg", kategori:"No Brand", gender:"Wanita", jenis:"Dress", gaya:"Party", warna:"Putih", sellerId:203, desc:"Dress fun untuk acara."},
  { id:15, name:"Canvas Sneakers", price:140000, priceText:"Rp140.000", img:"img/product15.jpg", kategori:"Brand", gender:"Unisex", jenis:"Sepatu", gaya:"Streetwear", warna:"Putih", sellerId:204, desc:"Sepatu canvas klasik."},
  { id:16, name:"Tailored Trousers", price:125000, priceText:"Rp125.000", img:"img/product16.jpg", kategori:"Brand", gender:"Pria", jenis:"Celana", gaya:"Formal", warna:"Hitam", sellerId:202, desc:"Celana formal potongan rapih."},
  { id:17, name:"Boho Scarf", price:45000, priceText:"Rp45.000", img:"img/product17.jpg", kategori:"No Brand", gender:"Wanita", jenis:"Syal", gaya:"Vintage", warna:"Cokelat", sellerId:205, desc:"Syal bohemian lembut."},
  { id:18, name:"Athleisure Shorts", price:70000, priceText:"Rp70.000", img:"img/product18.jpg", kategori:"Brand", gender:"Pria", jenis:"Celana", gaya:"Sporty", warna:"Hitam", sellerId:206, desc:"Shorts nyaman untuk aktivitas."}
];

const SELLERS = {
  201: { id:201, name:"Mila Thrift Store", avatar:"img/seller1.jpg", location:"Bandung", contact:"@milathrift", rating:4.6, sold:320,
    reviews:[
      {id:1,buyer:"Kinei",avatar:"img/buyer1.jpg",rating:5,comment:"Barang bagus, rapi, pengiriman cepat."},
      {id:2,buyer:"Sayla",avatar:"img/buyer2.jpg",rating:4,comment:"Kondisi oke, cuma ada sedikit benang."}
    ]
  },
  202: { id:202, name:"GentleSecond", avatar:"img/seller2.jpg", location:"Jakarta", contact:"@gentlesecond", rating:4.7, sold:410,
    reviews:[
      {id:3,buyer:"Danish",avatar:"img/buyer3.jpg",rating:5,comment:"Puas, sesuai gambar."},
      {id:4,buyer:"Tizani",avatar:"img/buyer4.jpg",rating:4,comment:"Ukuran agak besar, tapi oke."}
    ]
  },
  203: { id:203, name:"Glow Preloved", avatar:"img/seller3.jpg", location:"Surabaya", contact:"@glowpreloved", rating:4.5, sold:220,
    reviews:[
      {id:5,buyer:"Muci",avatar:"img/buyer5.jpg",rating:5,comment:"Roknya lucu, bahan nyaman."},
      {id:6,buyer:"Khalisha",avatar:"img/buyer6.jpg",rating:4,comment:"Cepat respon & packing rapi."}
    ]
  },
  204: { id:204, name:"Urban Wardrobe", avatar:"img/seller2.jpg", location:"Jakarta", contact:"@urbanwardrobe", rating:4.8, sold:420,
    reviews:[
      {id:7,buyer:"Danish",avatar:"img/buyer3.jpg",rating:5,comment:"Jaket sesuai gambar."},
      {id:8,buyer:"Tizani",avatar:"img/buyer4.jpg",rating:4,comment:"Rekomendasi."}
    ]
  },
  205: { id:205, name:"Bloom Rewear", avatar:"img/seller3.jpg", location:"Surabaya", contact:"@bloomrewear", rating:4.4, sold:210,
    reviews:[
      {id:9,buyer:"Muci",avatar:"img/buyer5.jpg",rating:5,comment:"Roknya lucu."},
      {id:10,buyer:"Khalisha",avatar:"img/buyer6.jpg",rating:4,comment:"Packing rapi."}
    ]
  },
  206: { id:206, name:"Sporty Finds", avatar:"img/seller4.jpg", location:"Bandung", contact:"@sportyfinds", rating:4.3, sold:180,
    reviews:[
      {id:11,buyer:"Rahma",avatar:"img/buyer7.jpg",rating:4,comment:"Cocok olahraga ringan."},
      {id:12,buyer:"Yoga",avatar:"img/buyer8.jpg",rating:4,comment:"Nyaman dipakai."}
    ]
  }
};

/* ===========================
   HELPERS: sanitize & stars
   =========================== */
function esc(s){ return String(s).replace(/[&<>"]/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch])); }
function renderStarsHTML(rating){
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html="";
  for(let i=0;i<full;i++) html+='<span class="star full">★</span>';
  if(half) html+='<span class="star half">★</span>';
  for(let i=0;i<empty;i++) html+='<span class="star empty">★</span>';
  return html;
}

/* ===========================
   RENDER PRODUCTS (dynamic)
   =========================== */
const productListEl = document.getElementById("productList");
function renderProductList(products){
  productListEl.innerHTML = "";
  if(!products.length){
    productListEl.innerHTML = '<p style="color:#777">Produk tidak ditemukan untuk filter ini.</p>';
    return;
  }
  products.forEach(p=>{
    const div = document.createElement("div");
    div.className = "product-card";
    div.dataset.product = p.id;
    div.innerHTML = `
      <img src="${esc(p.img)}" alt="${esc(p.name)}">
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.priceText)}</p>
    `;
    productListEl.appendChild(div);
  });
  attachProductClicks();
}

/* ===========================
   FILTER: read selects & filter
   =========================== */
function applyFilter(){
  const k = document.getElementById("filter-kategori").value.toLowerCase();
  const g = document.getElementById("filter-gender").value.toLowerCase();
  const j = document.getElementById("filter-jenis").value.toLowerCase();
  const gg = document.getElementById("filter-gaya").value.toLowerCase();
  const w = document.getElementById("filter-warna").value.toLowerCase();

  const filtered = PRODUCTS.filter(p=>{
    const pk = p.kategori.toLowerCase();
    const pg = p.gender.toLowerCase();
    const pj = p.jenis.toLowerCase();
    const pgaya = p.gaya.toLowerCase();
    const pw = p.warna.toLowerCase();
    return (k==="semua"||pk===k) &&
           (g==="semua"||pg===g) &&
           (j==="semua"||pj===j) &&
           (gg==="semua"||pgaya===gg) &&
           (w==="semua"||pw===w);
  });

  renderProductList(filtered);
}

/* ===========================
   MODALS: product & seller
   =========================== */
const productModal = document.getElementById("productModal");
const sellerModal = document.getElementById("sellerModal");
const cartModal = document.getElementById("cartModal");

const closeProductModal = document.getElementById("closeProductModal");
const closeProductModal2 = document.getElementById("closeProductModal2");
const closeSellerModal = document.getElementById("closeSellerModal");
const closeCartModal = document.getElementById("closeCartModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");

const sellerMiniImg = document.getElementById("sellerMiniImg");
const sellerMiniName = document.getElementById("sellerMiniName");
const sellerMiniMeta = document.getElementById("sellerMiniMeta");
const openSellerProfileBtn = document.getElementById("openSellerProfile");
const addToCartBtn = document.getElementById("addToCartBtn");

let currentProductId = null;

function attachProductClicks(){
  document.querySelectorAll(".product-card").forEach(card=>{
    card.onclick = ()=> openProductModal(parseInt(card.dataset.product));
  });
}

function openProductModal(productId){
  const p = PRODUCTS.find(x=>x.id===productId);
  if(!p) return;
  currentProductId = p.id;
  modalImage.src = p.img;
  modalTitle.textContent = p.name;
  modalPrice.textContent = p.priceText;
  modalDesc.textContent = p.desc;

  const seller = SELLERS[p.sellerId];
  if(seller){
    sellerMiniImg.src = seller.avatar;
    sellerMiniName.textContent = seller.name;
    sellerMiniMeta.textContent = `${seller.location} • ${seller.contact}`;
    openSellerProfileBtn.dataset.sellerId = seller.id;
  } else {
    sellerMiniImg.src = "";
    sellerMiniName.textContent = "";
    sellerMiniMeta.textContent = "";
  }

  productModal.style.display = "flex";
  productModal.setAttribute("aria-hidden","false");
}

function openSellerModal(sellerId){
  const s = SELLERS[sellerId];
  if(!s) return;
  document.getElementById("sellerAvatar").src = s.avatar;
  document.getElementById("sellerTitle").textContent = s.name;
  document.getElementById("sellerLocation").textContent = s.location;
  document.getElementById("sellerRatingNumber").textContent = `${s.rating.toFixed(1)} / 5`;
  document.getElementById("sellerStars").innerHTML = renderStarsHTML(s.rating);

  document.getElementById("sellerProductsCount").textContent = PRODUCTS.filter(p=>p.sellerId===s.id).length;
  document.getElementById("sellerSoldCount").textContent = s.sold || 0;

  // mini products
  const sp = document.getElementById("sellerProducts");
  sp.innerHTML = "";
  PRODUCTS.filter(p=>p.sellerId===s.id).forEach(p=>{
    const node = document.createElement("div");
    node.className = "mini-card";
    node.innerHTML = `<img src="${esc(p.img)}" alt="${esc(p.name)}"/><h5>${esc(p.name)}</h5><p>${esc(p.priceText)}</p>`;
    node.addEventListener("click", ()=> {
      sellerModal.style.display = "none";
      openProductModal(p.id);
    });
    sp.appendChild(node);
  });

  // reviews
  const rv = document.getElementById("sellerReviews");
  rv.innerHTML = "";
  s.reviews.forEach(r=>{
    const el = document.createElement("div");
    el.className = "review";
    el.innerHTML = `<div class="rev-head"><img src="${esc(r.avatar)}" alt="${esc(r.buyer)}"/><div><strong>${esc(r.buyer)}</strong></div><div class="rev-stars" style="margin-left:auto">${renderStarsHTML(r.rating)}</div></div><div class="rev-body">${esc(r.comment)}</div>`;
    rv.appendChild(el);
  });

  sellerModal.style.display = "flex";
  sellerModal.setAttribute("aria-hidden","false");
}

/* close handlers */
closeProductModal.addEventListener("click", ()=>{ productModal.style.display="none"; productModal.setAttribute("aria-hidden","true"); });
closeProductModal2.addEventListener("click", ()=>{ productModal.style.display="none"; productModal.setAttribute("aria-hidden","true"); });
closeSellerModal.addEventListener("click", ()=>{ sellerModal.style.display="none"; sellerModal.setAttribute("aria-hidden","true"); });
closeCartModal.addEventListener("click", ()=>{ cartModal.style.display="none"; cartModal.setAttribute("aria-hidden","true"); });

window.addEventListener("click", (e)=>{
  if(e.target === productModal) { productModal.style.display="none"; productModal.setAttribute("aria-hidden","true"); }
  if(e.target === sellerModal) { sellerModal.style.display="none"; sellerModal.setAttribute("aria-hidden","true"); }
  if(e.target === cartModal) { cartModal.style.display="none"; cartModal.setAttribute("aria-hidden","true"); }
});

openSellerProfileBtn.addEventListener("click", (e)=>{
  const sellerId = +e.currentTarget.dataset.sellerId;
  if(!sellerId) return;
  productModal.style.display = "none";
  openSellerModal(sellerId);
});

/* ===========================
   CART: localStorage-backed
   =========================== */
const CART_KEY = "ploved_cart_v1";
let CART = JSON.parse(localStorage.getItem(CART_KEY) || "[]"); // array of {productId, qty}

const cartBtn = document.getElementById("cartBtn");
const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartSummaryEl = document.getElementById("cartSummary");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

function saveCart(){
  localStorage.setItem(CART_KEY, JSON.stringify(CART));
  updateCartCount();
}

function updateCartCount(){
  const totalQty = CART.reduce((s,it)=>s+it.qty,0);
  cartCountEl.textContent = totalQty;
}

function addToCart(productId, qty=1){
  const existing = CART.find(i=>i.productId===productId);
  if(existing) existing.qty += qty;
  else CART.push({ productId, qty });
  saveCart();
  // small visual feedback
  cartBtn.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:220});
}

function removeFromCart(productId){
  CART = CART.filter(i=>i.productId!==productId);
  saveCart();
  renderCart();
}

function changeQty(productId, delta){
  const it = CART.find(i=>i.productId===productId);
  if(!it) return;
  it.qty = Math.max(1, it.qty + delta);
  saveCart();
  renderCart();
}

/* render cart UI */
function renderCart(){
  cartItemsEl.innerHTML = "";
  if(CART.length===0){
    cartItemsEl.innerHTML = "<p style='color:#666'>Keranjang kosong.</p>";
    cartSummaryEl.textContent = "";
    return;
  }
  let total = 0;
  CART.forEach(item=>{
    const prod = PRODUCTS.find(p=>p.id===item.productId);
    if(!prod) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${esc(prod.img)}" alt="${esc(prod.name)}"/>
      <div class="meta">
        <div style="font-weight:700">${esc(prod.name)}</div>
        <div style="color:#666">${esc(prod.priceText)}</div>
        <div class="qty-controls" style="margin-top:6px;">
          <button class="btn small dec" data-id="${prod.id}">-</button>
          <div style="padding:0 .6rem">${item.qty}</div>
          <button class="btn small inc" data-id="${prod.id}">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:700">${formatCurrency(prod.price * item.qty)}</div>
        <button class="btn small remove" data-id="${prod.id}" style="margin-top:6px;background:#ffefef;color:#b00020">Hapus</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
    total += prod.price * item.qty;
  });

  cartSummaryEl.textContent = `Total: ${formatCurrency(total)}`;
  // attach events
  cartItemsEl.querySelectorAll(".dec").forEach(b=> b.addEventListener("click", ()=> changeQty(+b.dataset.id, -1)));
  cartItemsEl.querySelectorAll(".inc").forEach(b=> b.addEventListener("click", ()=> changeQty(+b.dataset.id, +1)));
  cartItemsEl.querySelectorAll(".remove").forEach(b=> b.addEventListener("click", ()=> removeFromCart(+b.dataset.id)));
}

function formatCurrency(n){
  return "Rp" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/* cart UI handlers */
cartBtn.addEventListener("click", ()=>{
  renderCart();
  cartModal.style.display = "flex";
  cartModal.setAttribute("aria-hidden","false");
});

clearCartBtn.addEventListener("click", ()=>{
  if(!confirm("Kosongkan keranjang?")) return;
  CART = [];
  saveCart();
  renderCart();
});

checkoutBtn.addEventListener("click", ()=>{
  alert("Simulasi checkout: total akan diproses (fitur backend belum terpasang).");
});

/* ===========================
   Hook add to cart button
   =========================== */
addToCartBtn.addEventListener("click", ()=>{
  if(!currentProductId) return;
  addToCart(currentProductId,1);
  productModal.style.display = "none";
});

/* ===========================
   Init: render all + attach
   =========================== */
document.getElementById("applyFilter").addEventListener("click", applyFilter);
renderProductList(PRODUCTS);

updateCartCount();

