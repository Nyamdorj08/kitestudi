import { RHFCode } from './rhf-code';
import { RHFDatePicker } from './rhf-date-picker';
import { RHFSelect } from './rhf-select';
import { RHFTextField } from './rhf-text-field';

// ----------------------------------------------------------------------

export const Field = {
  Text: RHFTextField,
  Select: RHFSelect,
  MultiSelect: RHFTextField,
  DatePicker: RHFDatePicker,
  Code: RHFCode,
};
