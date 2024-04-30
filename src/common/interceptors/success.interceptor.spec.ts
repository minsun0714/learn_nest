import { SuccessInterceptor } from './success.interceptor';

describe('InterceptorsInterceptor', () => {
  it('should be defined', () => {
    expect(new SuccessInterceptor()).toBeDefined();
  });
});
