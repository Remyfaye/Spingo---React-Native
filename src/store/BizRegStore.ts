import { registerInDevtools, Store } from "pullstate";

export const BizRegStore = new Store({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    businessName: "",
    address: "",
    state: "",
    city: "",
    country: "",
    industry: "",
    logo: "",
});

registerInDevtools({
    BizRegStore,
});