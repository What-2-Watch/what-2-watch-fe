<template>
  <form>
      <input
        type="text"
        name="email"
        placeholder="EMAIL"/>
      <label for="email"></label>
      <input 
        type="text"
        name="password"
        placeholder="PASSWORD"/>
        <label for="password"></label>
        <button>LOGIN</button>
  </form>
</template>


<script>

export default ({
  name: 'Login'
})
</script>
