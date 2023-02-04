export interface FindDocumentByNameResposeEvent {
  document: {
    props: {
      id: string;
      name: string;
      cap: number;
    };
  };
}
