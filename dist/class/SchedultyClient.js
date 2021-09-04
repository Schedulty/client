"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedultyClient = void 0;
const node_fetch_1 = require("node-fetch");
class SchedultyClient {
    constructor(apiToken) {
        this.apiToken = apiToken;
        this.apiUrl = 'https://api.schedulty.ru';
    }
    call(method, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullUrl = this.apiUrl + method;
            params.token = this.apiToken;
            const response = yield (0, node_fetch_1.default)(fullUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params),
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
    setSchedule(schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.call('/schedule/set', schedule);
        });
    }
    checkToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.call('/token/check')).isValid;
        });
    }
    getTokenStats() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.call('/token/stats');
        });
    }
}
exports.SchedultyClient = SchedultyClient;
//# sourceMappingURL=SchedultyClient.js.map