import { hexToRgbA } from '@/utils';

export default {
  container: {
    height: 45,
    marginBottom: 16,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    margin: 0,
    fontSize: 12,
    color: hexToRgbA('#303030', 0.7),
    backgroundColor: '#fff',
    padding: [0, 3],
  },
  input: {
    width: '100%',
    height: '100%',
    lineHeight: 1.5,
    color: '#303030',
    padding: 12,
    fontSize: 13,
    boxShadow: 'none',
    border: '1px solid #d7d7d7',
    backgroundColor: '#fff',
    transition: 'border-color .15s ease-in-out',
    '&:focus': { outline: 'none', borderColor: hexToRgbA('#922c88', 0.6) },
    '&::placeholder': { color: hexToRgbA('#303030', 0.7) },
  },
};
