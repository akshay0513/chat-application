import { defineStore } from "pinia";
import axios from "axios";

export const useChatStore = defineStore("chat", {
  state: () => ({
    customers: [],
    selectedCustomer: null,
    messages: [],
  }),
  actions: {
    selectCustomer(customer) {
      this.selectedCustomer = customer;
    },
    clearSelectedCustomer() {
      this.selectedCustomer = null;
    },
    async fetchCustomers() {
      try {
        const response = await axios.get("http://localhost:5000/customers");
        this.customers = response.data;
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    },
    async fetchCustomerDetails(customerId) {        
      try {
        const response = await axios.get(
          `http://localhost:5000/customers/${customerId}`
        );        
        this.selectedCustomer = response.data;
        const messagesResponse = await axios.get(
          `http://localhost:5000/messages?customerId=${customerId}`
        );
        this.messages[customerId] = messagesResponse.data;
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    },
    async addMessage(customerId, message) {
      try {
        const response = await axios.post("http://localhost:5000/messages", {
          ...message,
          customerId,
        });
        if (!this.messages[customerId]) {
          this.messages[customerId] = [];
        }
        this.messages[customerId].push(response.data);
      } catch (error) {
        console.error("Error posting message:", error);
      }
    },
    // async fetchCustomerDetails(customerId) {
    //   let newMessageData = [];
    //   this.messages = [];
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:5000/customers/${customerId}`
    //     );
    //     console.log("response", JSON.stringify(response.data));

    //     this.selectedCustomer = response.data;
    //     this.messages[customerId] = response.data.messages;
    //     // if (response.data.id === customerId) {
    //     //   this.messages[customerId] = response.data.messages;
    //     // }
    //     // for (let i in response.data) {
    //     //     // console.log("customerId", typeof customerId);
    //     //     // console.log("response.data", typeof response.data.id);

    //     //   if (response.data.id === customerId) {
    //     //     console.log("inside if");

    //     //     newMessageData.push(response.data[i].messages);
    //     //     console.log("newMessageData", newMessageData);
    //     //   }
    //     // }

    //     // console.log("messages", JSON.stringify(this.messages[customerId]));
    //     // this.messages = newMessageData[0];
    //   } catch (error) {
    //     console.error("Error fetching customer details:", error);
    //   }
    // },
    // async addMessage(customerId, message) {
    //   try {
    //     const response = await axios.post(
    //       `http://localhost:5000/customers/${customerId}/messages`,
    //       message
    //     );
    //     if (!this.messages[customerId]) {
    //       this.messages[customerId] = [];
    //     }
    //     this.messages[customerId].push(response.data);
    //   } catch (error) {
    //     console.error("Error posting message:", error);
    //   }
    // },
    // async addMessage(customerId, message) {
    //     try {
    //       const response = await axios.post(`http://localhost:5000/customers/${customerId}/messages`, message)
    //       console.log("response", response);

    //     //   this.messages[customerId].push(response.data)
    //     } catch (error) {
    //       console.error('Error adding message:', error)
    //     }
    //   },
    // addMessage(customerId, message) {
    //   if (!this.messages[customerId]) {
    //     this.messages[customerId] = [];
    //   }
    //   this.messages[customerId].push(message);
    // },
    // async saveMessage() {
    //     try {
    //         const response = await axios.post(`http://localhost:3000/messages.json`);

    //     } catch(err) {

    //     }
    // }
  },
});

// import { defineStore } from 'pinia'

// export const useChatStore = defineStore('chat', {
//   state: () => ({
//     customers: [],
//     selectedCustomer: null,
//     messages: [],
//   }),
//   actions: {
//     // Define actions to manipulate the state
//   },
// })
