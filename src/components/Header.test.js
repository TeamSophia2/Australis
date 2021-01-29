//crear test que falle
//lo minimo necesario
//refactor
import React from 'react'
import { render, screen } from '@testing-library/react';
import Header from './Header.js';

beforeEach(()=>render(<Header/>));



describe('render del Header', () => {
    it("debe mostrar textos",()=>{
        expect(screen.queryByText(/es Sophia2/i)).toBeInTheDocument(); 

    });
    
  });
  
  describe('render del Header', () => {
    it("debe mostrar textos",()=>{
        expect(screen.queryByText(/Qué es Australis/i)).toBeInTheDocument(); 

    });
    
  });
  