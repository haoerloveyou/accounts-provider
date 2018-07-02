/** GET /api/v0/auth/info */
export interface AuthInfoResponse {
    recaptcha: string | null;
    availableServices: {
        [service: string]: string;
    };
}
/** POST /api/v0/auth/login */
export interface LoginRequest {
    email: string;
    password: string;
}
/** POST /api/v0/auth/register */
export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}
/** POST /api/v0/auth/register and /api/v0/auth/login */
export declare type AuthResponse = BasicUserResponse;
export interface Device {
    id: string;
    name: string;
    model?: string;
    suffix: string;
}
export interface Field {
    label: string;
    value: string;
    type: "string" | "decimal" | "dollar";
}
export declare type TransactionStatus = "created" | "approved" | "failed" | "pending" | "completed" | "refunded" | "denied";
export interface Transaction {
    id: string;
    title: string;
    price: number;
    service: string;
    url: string | null;
    processorName: string;
    status: TransactionStatus;
    date: number;
    statusDate: number;
    fields: Field[];
}
export interface TransactionRequest {
    title: string;
    price: number;
    sku: string;
    url: string;
    fields?: Field[];
}
export interface LinkedService {
    id: string;
    name: string;
    service: string;
    linkedAt: number;
    allowsSignIn: boolean;
}
/** GET /api/v0/user */
export interface BasicUserResponse {
    id: string;
    email: string;
    emailVerificationState: 0 | 1 | 2;
    name: string;
    hasSetPassword: boolean;
    createdAt: number;
    administrator: boolean;
}
/** GET /api/v0/user */
export interface UserResponse extends BasicUserResponse {
    devices: Device[];
    transactions: Transaction[];
    services: LinkedService[];
}
/** GET /api/v0/user/transactions */
export declare type UserTransactionsResponse = Transaction[];
/** DELETE /api/user */
export interface DeleteRequest {
    password: string;
}
/** POST /api/user/deactivate */
export interface DeactivateRequest {
    password: string;
}
/** GET /api/user/download */
export declare type UserGDPRRequest = any;
/** POST /api/v0/user/device */
export interface AddDeviceRequest {
    udid: string;
    name: string;
    model?: string;
}
/** DELETE /api/user/device/{id} */
export declare type DeleteUserDeviceResponse = never;
export interface ClientScope {
    id: string;
    title: string;
    summary: string;
    icon?: string;
    description?: string;
    isSensitive?: boolean;
    firstPartyOnly?: boolean;
}
export interface ClientInfoResponse {
    title: string;
    image: string | null;
    firstParty: boolean;
    scopes: ClientScope[];
}
export interface LegalDocumentResponse {
    text: string;
}
export interface UserStateUpdate {
    id: string;
    userID: string;
    state: "restored" | "deactivated" | "deleted" | "banned" | "unbanned";
}
export interface UserStateUpdatesResponse {
    updates: UserStateUpdate[];
}
