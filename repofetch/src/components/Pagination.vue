<template>
  <div>
  <span>
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
        :disabled="isInFirstPage"
        >
          First
        </button>
      </li>
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPrevPage"
        :disabled="isInFirstPage"
        >
          Prev
        </button>
      </li>
  
      <!-- Visible Buttons Start -->
  
      <li
      v-for="page in pages"
      :key="page.name"
      class="pagination-item"
      :class="{ active: isPageActive(page.name) }"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
      >
        {{ page.name }}
      </button>
    </li>
  
      <!-- Visible Buttons End -->
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickNextPage"
        :disabled="isInLastPage"
        >
          Next
        </button>
      </li>
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickLastPage"
        :disabled="isInLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </span>
  </div>
</template>

<script>
export default {
  name: "pagiNation",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
        if (this.currentPage === 1) {
            return 1;
        }
        if (this.currentPage === this.totalPages) {
            return this.totalPages - this.maxVisibleButtons;
        }
        if(this.currentPage > 3){
          return this.pages[0].name;
        }
        return  1;
    },
    pages() {
        const range = [];

        for(
            let i = this.startPage ;
            i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
            i++
        ) {
            range.push({
                name: i,
                isDisabled: i === this.currentPage
            });
        }
        return range;
    },
    isInFirstPage() {
        return this.currentPage === 1;
    },
    isInLastPage() {
        return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
        this.$emit('pagechanged', 1);
    },
    onClickPrevPage() {
        this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
        this.$emit('pagechanged', page);
    },
    onClickNextPage() {
        this.$emit('pagechanged', this.currentPage + 1);
        if(this.currentPage > 2){
          this.startPage = this.currentPage - 2;
        }
    },
    onClickLastPage() {
        this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  }

};
</script>

<style scoped>
.pagination {
  list-style-type: none;
}
button{
  padding: 0.6rem;
  margin: 0.1rem;

}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #1c64ac;
  color: #fff;
}
</style>
