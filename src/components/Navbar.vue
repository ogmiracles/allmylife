<script setup>
  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
</script>

<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
            fill="#ffffff"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="2069a460dcf28295e231f3111e03a9a2">
                <path
                  d="M465.582,158.008c-60.372-61.071-207.104-49.752-264.736-35.462c-67.368,17.234-85.324,68.461-83.573,151.68 c0.758,47.77,21.449,90.15,61.87,104.437c82.104,28.53,152.461,24.593,226.321-46.318c-37.908-40.88-69.347-55.147-121.022-51.228 c-50.152,2.468-78.578-5.417-114.281-44.313c43.415-41.854,70.113-62.037,122.52-67.477c58.648-5.902,110.783,18.731,133.498,41.85 c21.181,21.662,31.929,71.415,26.702,131.515c-3.983,48.759-19.471,77.316-55.174,87.66 c-46.146,14.29-113.016,21.182-174.631,18.714c-72.867-2.931-111.056-17.743-121.799-29.062 c-22.419-25.097-38.901-78.283-42.652-139.354c-3.729-61.089,5.734-118.704,24.715-150.224 c18.7-31.529,88.064-53.677,190.119-60.083c85.115-4.931,164.206,1.474,165.195,1.474l-5.244-67.962 c0,0-182.162,21.181-210.103,23.626C155.684,33.888,64.63,48.659,34.176,99.891c-54.407,91.607-40.67,286.616,25.205,359.527 c58.88,65.514,263.245,54.666,354.829,27.102c41.156-12.308,87.811-46.318,95.799-138.892 C515.484,286.534,507.02,200.344,465.582,158.008z M282.44,321.511l64.633,14.29l-79.34,32.977L282.44,321.511z M228.791,232.844 l79.336-32.981l-14.708,47.267L228.791,232.844z"
                ></path>
              </g>
            </g>
          </svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><RouterLink to="/" class="nav-link px-2 text-white">Home</RouterLink></li>
          <li>
            <div class="dropdown">
              <a
                class="dropdown-toggle nav-link px-2 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Products</a
              >
              <ul class="dropdown-menu">
                <li>
                  <RouterLink
                    :to="{ name: 'products', query: { category: 1 } }"
                    class="dropdown-item"
                    >Laptops</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    :to="{ name: 'products', query: { category: 2 } }"
                    class="dropdown-item"
                    >Phones</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    :to="{ name: 'products', query: { category: 3 } }"
                    class="dropdown-item"
                    >Headphones</RouterLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li> <RouterLink to = "/cart" class="nav-link px-2 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16"> 
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/> 
</svg></RouterLink></li>
          <li><RouterLink to="/wishlist" class="nav-link px-2 text-white">Wishlist</RouterLink></li>
          <li><RouterLink to="/login" class="nav-link px-2 text-white">Login</RouterLink></li>
          <li><button class="btn btn-primary" @click="logout">logout</button></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup></script>