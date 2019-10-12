<template>
  <modal-template modal-type="company_data_modal">
    <div class="form-group">
      <label class="label"> Additional Notes</label>
      <textarea
        name="notes"
        class="input"
        cols="30"
        rows="5"
        placeholder="e.g Good Tech Company"
        v-model="notes"
      >
      </textarea>
      <button class="button" @click="save" @keypress.enter="save">
        save
      </button>
    </div>
  </modal-template>
</template>

<script>
import { mapActions } from 'vuex';
import ModalTemplate from './ModalTemplate.vue';

export default {
  name: 'company-notes-modal',
  components: { ModalTemplate },
  data () {
    return {
      notes: null
    }
  },
  methods: {
    ...mapActions([
      'addNotes',
      'toggle'
    ]),

    save () {
      this.addNotes(this.notes)
      .then(() => {
        this.toggle('company_data_modal')
      });

    }
  }
}

</script>

<style lang="scss" scoped>
@import "~Styles/settings/variables";
@import "~Styles/settings/mixins";

.form-group {
  display: grid;
  margin-bottom: 20px;
  min-width: 500px;

  > .label {
    font-size: rem(11px);
    font-weight: bold;
    color: $grey;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  > .input {
    border-radius: 5px;
    border: 1px solid $border-color;
    padding: 10px 15px;
    font-size: rem(12px);
    box-shadow: 0 0 3px rgba($grey-dark, 0.15);
    outline: none;

    &::placeholder {
      color: $border-color;
    }
  }

  > .button {
    justify-self: flex-end;
    padding: 10px 30px;
    margin-top: 30px;

    border-radius: 5px;

    background-color: $purple-medium;
    color: white;

    font-size: rem(12px);
    font-weight: bold;
    text-transform: uppercase;
    outline: none;
  }
}
</style>