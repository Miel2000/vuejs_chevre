<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>
	<div>
		<button 
			class="oneChoice"
			:isContinuePlaying="choiceInfos.isContinue"
			@click="choiceClickHandler"
		>
			{{choiceInfos.text}}
		</button>
	</div>
</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

export default {

	props: {
		choiceInfos: {
			type: Object,
			required: true
		}
	},

	methods: {
	},

	created() {
		// 
	},

	mounted() {

	},

	data() {
		return {
		}
	},

	methods: {

		choiceClickHandler() {

			this.$emit("a-choice-have-been-acted", this.choiceInfos.route);

		}

	}
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">

	.oneChoice {
		display: inline-block;
		border: solid 5px red;
		padding: 10px 20px;

		cursor: pointer;
	}

</style>
