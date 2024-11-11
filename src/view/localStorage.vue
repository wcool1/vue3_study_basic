<script setup>

// 用户设置
localStorage.setItem('theme', 'dark')

// 表单数据暂存
localStorage.setItem('draft', JSON.stringify(formData))

// 用户登录状态
localStorage.setItem('token', 'xxx')

// 购物车数据
localStorage.setItem('cart', JSON.stringify(cartItems))
</script>
