interface LoginDTO {
    email: string,
    password: string
}
interface RegisterDTO {
    businessName: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: number
    password: string;
    address: string;
    state: string;
    city: string;
    country: string;
    referral: string | null;
    industry: string
    logo: string | null;
    subPlan: string
}

interface VerifyEmailDTO {
    email: string;
    otp: string
}

interface NewPasswordDTO {
    email: string,
    password: string
}
export { LoginDTO, RegisterDTO, VerifyEmailDTO, NewPasswordDTO }