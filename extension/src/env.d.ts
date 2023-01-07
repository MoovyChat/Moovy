declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOOVY: string;
    }
  }
}

export {}
