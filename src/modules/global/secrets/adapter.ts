export abstract class ISecretsService {
  ENV: string | null;
  PORT: number | null;
  url: {
    HELLO_WORD_SERVICE: string;
  };
  db: {
    TYPE: string;
    HOST: string;
    USERNAME: string;
    PASSWORD: string;
    DATABASE: string;
  };
}
