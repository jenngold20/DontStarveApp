import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import sharedStyles from './SharedStyles'; // ajustá la ruta según corresponda

const tips = [
  'No te olvides de recolectar comida antes del anochecer.',
  'Construí una fogata para mantenerte caliente durante la noche.',
  'Plantá semillas para asegurarte alimento a largo plazo.',
  'Usá el mechero de Willow para iluminar las áreas oscuras.',
  'Cuidado con las tormentas, cubrite bien.',
];

export default function TipDelDia() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 15000); // 15 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={sharedStyles.tipContainer}>
      <Text style={sharedStyles.tipTitle}>Tip del día:</Text>
      <Text style={sharedStyles.tipText}>{tips[tipIndex]}</Text>
    </View>
  );
}
