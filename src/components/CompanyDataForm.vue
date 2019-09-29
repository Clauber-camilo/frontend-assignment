<template>
  <form class="data-form" @submit.prevent="handleForm">
    <div class="form-group" :class="{ '-error': $v.name.$error }">
      <label class="label">COMPANY NAME</label>
      <input
        type="text"
        v-model.trim="name"
        class="input"
        placeholder="e.g Your Company Name"
        @input="setFormVal('name', $event.target.value)"
      />

      <div class="error" v-if="!$v.name.required">* Field is required</div>
    </div>
    <div class="form-group" :class="{ '-error': $v.name.$error }">
      <label class="label">COMPANY SPEND</label>
      <input
        type="text"
        v-model.trim="name"
        class="input"
        placeholder="e.g $150,000"
        @input="setFormVal('name', $event.target.value)"
      />

      <div class="error" v-if="!$v.name.required">* Field is required</div>
    </div>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from "vuelidate/lib/validators";

export default {
  name: "company-data-form",
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      spend: "",
      spend_min: "",
      spend_max: "",
      notes: ""
    };
  },
  validations: {
    name: {
      required
    },
    spend: {
      required
    }
  },
  methods: {
    handleForm() {
      console.log("Sent");
    },
    setFormVal(field, value) {
      this.name = value;
      this.$v[field].$touch()
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';
  @import '~Styles/settings/mixins';

  .data-form {
    > .form-group {
      display: flex;
      flex-direction: column;
      max-width: 50%;
      margin-bottom: 20px;

      &.-error {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);

        > .input {
          border-color: $red-error;
        }

        > .error {
          display: inherit;
        }
      }

      > .label {
        font-size: rem(11px);
        font-weight: bold;
        color: $grey;
        margin-bottom: 5px;
      }

      > .input {
        border-radius: 5px;
        border: 1px solid $border-color;
        padding: 10px 15px;
        font-size: rem(12px);

        &::placeholder {
          color: $border-color;
        }
      }

      > .error {
        color: $red-error;
        font-size: rem(11px);
        margin: 5px 0;
        display: none;
      }
    }
  }

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>