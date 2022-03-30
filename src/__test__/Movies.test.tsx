import Movies from "../components/Movies";
import {render} from '@testing-library/react';
test('should be in document' , () =>{
    const {container,getByTestId} = render(<Movies/>)
    expect(getByTestId('movies')).toBeInTheDocument()
})