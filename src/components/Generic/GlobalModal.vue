<template>
  <div class="modal fade" :id="modal_id" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body qrcode">
          <img :src="modal_content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalModal",
  props: ["modal_id", "modal_content"]
};
</script>
