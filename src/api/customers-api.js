import axios from "axios";

class CustomersApi {
	constructor() {
		this.API_BASE_URL = "http://localhost:3000";
		this.client = axios.create({
			baseURL: `${this.API_BASE_URL}/api/customers/`
		});
	}
	getCustomers = async () => {
		const response = await this.client.get("");
		return response.data;
	}
	getCustomerTransactions = async (customerId) => {
		const response = await this.client.get(`${customerId}/`);
		return response.data;
	}
	setTransaction = async (transaction) => {
		const response = await this.client.post("", transaction);
		return response.data;
	}
}

const customersApiInstance = new CustomersApi();
export { customersApiInstance };