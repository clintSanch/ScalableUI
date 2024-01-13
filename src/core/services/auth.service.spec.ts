import { AuthService } from "./auth.service";

describe('AuthService', () => {
    let service: AuthService

    beforeEach(() => {
        service = new AuthService();
    });

    it('should create a person or register new person', () => {
        service.register();
        expect(service.register()).toContain('');
    })

    it('should authorize or authenticate registered user to a given service', () => {
        service.login();
        expect(service.login()).toBeTruthy();
    })
});