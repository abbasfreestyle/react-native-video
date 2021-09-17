declare global {
  namespace jest {
    interface Matchers {
      toHaveAnimatedStyle(
        expected: unknown,
        { exact }?: { exact: boolean },
      ): void;
    }
  }
}

export {};
