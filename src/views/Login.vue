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
      <button>Don't have an account? Create one here!</button>
      <button>LOGIN</button>
  </form>
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
    <input 
      type="text"
      name="confirmPassword"
      placeholder="RETYPE PASSWORD"/>
    <label for="confirmPassword"></label>
    <input 
      type="text"
      name="firstName"
      placeholder="FIRST NAME"/>
    <label for="firstName"></label>
    <input 
      type="text"
      name="lastName"
      placeholder="LAST NAME"/>
    <label for="lastName"></label>
    <input 
      type="text"
      name="region"
      placeholder="DEFAULT REGION"/>
    <label for="region"></label>
    <input 
      type="text"
      name="language"
      placeholder="LANGUAGE"/>
    <label for="language"></label>
    <button>CREATE ACCOUNT</button>
  </form>
</template>


<script>

export default ({
  name: 'Login'
})
</script>
