<template>
    <div>
        <button class="open-modal-button" @click="toggleModal">Open Modal</button>
        <modal :visible="visible" @close="toggleModal">
            <div class="product-modal">
                <form class="product-form" @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" id="name" v-model="product.name" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="price" class="form-label">Price:</label>
                        <input type="number" id="price" v-model="product.price" required class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="description" class="form-label">Description:</label>
                        <textarea id="description" v-model="product.description" required
                            class="form-textarea"></textarea>
                    </div>
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from './Modal.vue'; // Import the modal component

export default {
    components: {
        Modal
    },
    props: {
        product: {
            type: Object,
            default: () => ({
                name: '',
                price: 0,
                description: ''
            })
        }
    },
    data() {
        return {
            visible: false, // Add a visible property to control the modal visibility
            isEditing: false
        };
    },
    watch: {
        product: {
            handler(newProduct) {
                this.isEditing = !!newProduct;
                this.product = { ...newProduct };
            },
            immediate: true
        }
    },
    methods: {
        toggleModal() {
            this.visible = !this.visible; // Toggle the visibility of the modal
        },
        handleSubmit() {
            this.$emit('submit', this.product);
            this.product = { name: '', price: 0, description: '' };
            this.toggleModal(); // Close the modal after form submission
        }
        // This method is used to handle the form submission in the parent component.
        // It emits an event named 'submit' and passes the product data as the payload.
        // The parent component can listen to this event and perform any necessary actions, such as updating the database or displaying a success message.
        // After the form submission, the method also resets the form by setting the product data to empty values.
        // ------------------------------------------------------------------------------------------------------
        // IN PARENT WE DO:
        // <ProductModal @submit="handleSubmit" :product="selectedProduct" />
        // methods: {
        //     handleSubmit(product) {
        //         if (this.selectedProduct) {
        //             // Update existing product
        //             this.updateProduct(product);
        //         } else {
        //             // Add new product
        //             this.addProduct(product);
        //         }
        //     }
        // }
    }
};
</script>

<style scoped>
.product-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    font-weight: bold;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #888;
    cursor: pointer;
}

.modal-close:hover {
    color: #555;
}
</style>
