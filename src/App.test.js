import { render, screen } from '@testing-library/react';
import App from './App';



beforeEach(()=>render(<App/>));

describe('render del Header', () => {
    it("debe mostrar textos",()=>{
        expect(screen.queryByText(/es Sophia2/i)).toBeInTheDocument(); 

    });
    
  });