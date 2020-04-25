import {render} from '@testing-library/vue'
import CRInput from './../components/CRInput/CRInput.vue';

describe('test', ()=> {
  test('test check', async () => {
    const { getByTestId } = render(CRInput, {
      props: {
        inputName: 'Name',
        inputLabel: 'LabelName',
      }
    });

    const input = getByTestId('cr-input');
    const label = getByTestId('cr-input-label');

    input.value = 10;

    expect(input.value).toBe('10');
    expect(label).toBeTruthy();
      
  });
});