import { PessoaDTO } from "./pessoa-dto";

export class PacienteDTO extends PessoaDTO {
  convenios: any;
  prontuarios: any;
  exames: any;
}
