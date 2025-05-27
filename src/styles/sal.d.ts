declare module "sal.js" {
  interface SalOptions {
    threshold?: number;
    once?: boolean;
    disable?: boolean;
    rootMargin?: string;
    animateClassName?: string;
    selector?: string;
  }

  function sal(options?: SalOptions): void;

  export default sal;
}
