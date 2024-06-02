export interface Investigation {
    codigo: string;
    descripcion: string;
    fechaAprobacion: Date;
    tipo: 'Académico' | 'Administrativo' | 'Comercial';
    presupuesto?: number; // Este es el campo opcional según el enunciado:)
  }
  