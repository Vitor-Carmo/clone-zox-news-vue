<template>
  <div
    id="search-container"
    :class="{
      show: this.show,
    }"
  >
    <form @submit.prevent="search">
      <input type="search" v-model="searchValue" placeholder="SEARCH" />
    </form>

    <div class="close" v-on:click="$emit('onHide')">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    show: Boolean,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    search(event) {
      event.preventDefault();
      if (!!this.searchValue.trim().length) {
        this.$router.push({
          name: "buscar",
          query: {
            search: this.searchValue.trim(),
          },
        });
        this.searchValue = "";
        this.$emit("onHide");
      }
    },
  },
};
</script>

<style scoped lang="scss">
#search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.94);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  transform: translateY(-100%);
  transition: transform 0.25s ease;
  padding: 30px;

  &.show {
    transform: translateY(0);
  }

  input {
    background: none;
    color: $color--white;
    font-size: 50px;
    font-weight: 300;
    padding: 5px 0;
    width: 100%;
    height: 65px; //50px;
    outline: none;
    text-transform: uppercase;
    border: 0;
    border-bottom: 1px solid $color--primary;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $color--white;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $color--white;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: $color--white;
    }
  }

  .close {
    position: absolute;
    top: 60px;
    right: 80px;
    width: 60px;
    height: 60px;
    cursor: pointer;

    span {
      display: block;
      border-radius: 2px;
      height: 3px;
      top: 27px;
      width: 60px;
      background: $color--white;
      position: absolute;
      left: 0;

      transition: 0.25s ease-in-out;
      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: 767px) {
    input {
      font-size: 40px;
      height: 40px;
    }

    .close {
      top: 30px;
      right: 20px;
    }
  }

  @media screen and (max-width: 479px) {
    input {
      font-size: 30px;
      height: 30px;
    }

    .close {
      top: 15px;
      width: 30px;
      height: 30px;

      span {
        width: 30px;
      }
    }
  }
}
</style>
