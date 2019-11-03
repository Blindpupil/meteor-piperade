<template>
	<div>
		<header class="has-overlay">
			<h3 class="title">Welcome to Piperade</h3>
		</header>

		<div class="container">
			<h1>Login</h1>
			<form class="d-flex wrap justify-start">
				<div class="form-group col-12">
					<input type="email" id="email" required="required"/>
					<label for="email" class="control-label">
						Your Email
					</label>
					<i class="bar"></i>
				</div>

				<div class="form-group col-12">
					<input type="password" id="password" required="required"/>
					<label for="password" class="control-label">
						Password
					</label>
					<i class="bar"></i>
				</div>

				<Button primary @click.prevent.native="login" class="col-12">
					Login
				</Button>
			</form>
		</div>
	</div>
</template>

<script>
import Button from '../atoms/Button'

export default {
  name: 'Login',
  components: {
    Button,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      console.log('here')
      // Meteor.loginWithPassword(this.email, this.password,
      //   error => {
      //     if (!error) this.$apolloProvider.defaultClient.resetStore()
      //     console.log(error)
      //   })
    },
  },
}
</script>

<style scoped lang="scss">
header {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 10em;
	background: url("images/meals-lily-banse.jpeg") round;
	color: white;
}
</style>
