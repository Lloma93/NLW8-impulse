// escreve o contrato de interações da aplicação do banco de dados sem implementa-las

// camada de dados
export interface FeedbackCreateData {
    // declara os valores e tipos q o create deve receber
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbackRepository {
    // metodo: (executa algo ou não) => retorna algo (void==não retorna) // por conta do async se tornou uma Promise
    create: ( data: FeedbackCreateData ) => Promise<void>;
   //  create: ( data: FeedbackCreateData ) => void;
}