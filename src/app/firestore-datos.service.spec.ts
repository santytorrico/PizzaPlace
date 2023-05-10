import { TestBed } from '@angular/core/testing';

import { FirestoreDatosService } from './firestore-datos.service';

describe('FirestoreDatosService', () => {
  let service: FirestoreDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
