// import PaintingList from './components/PaintingList';
// import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
// import Section from './components/Section';
// import paintings from './paintings.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <Container>
      <Alert text="PTN PNH" />
      <Alert text="PTN PNH" type="succes" />
      <Alert text="PTN PNH" type="warning" />
      <Alert text="PTN PNH" type="error" />
      {/* <ColorPicker options={colorPickerOptions} />
      <Section title="Top of week">
        <PaintingList items={paintings} />
      </Section> */}
    </Container>
  );
}
