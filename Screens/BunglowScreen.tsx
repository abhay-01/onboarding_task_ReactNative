import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z, ZodError } from 'zod';

const priceCalculatorSchema = z.object({
  area: z.string().min(1),
  bedrooms: z.string().min(1),
  additionalFeatures: z.boolean(),
});

const BunglowPrice = () => {
  const [formData, setFormData] = useState({ area: '', bedrooms: '', additionalFeatures: false });
  const [formErrors, setFormErrors] = useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<string | null>(null);

  const handleCalculatePrice = () => {
    try {
      const validatedData = priceCalculatorSchema.parse(formData);
      const parsedData = {
        ...validatedData,
        area: parseFloat(validatedData.area), // Ensure area is treated as a number
        bedrooms: parseFloat(validatedData.bedrooms), // Ensure bedrooms is treated as a number
      };

      const calculatedPrice = calculatePrice(parsedData);
      setCalculatedPrice(calculatedPrice);
    } catch (error) {
      if (error instanceof ZodError) {
        setFormErrors(error);
      }
    }
  };

  const calculatePrice = (data: { area: string; bedrooms: string; additionalFeatures: boolean }): number => {
    // Add your price calculation logic here based on the provided variables
    // This is just a placeholder example; replace it with your own calculation
    const basePrice = 1000;
    const areaMultiplier = 200;
    const bedroomsMultiplier = 500;
    const additionalFeaturesMultiplier = 1000;

    return (
      basePrice +
      data.area * areaMultiplier +
      data.bedrooms * bedroomsMultiplier +
      (data.additionalFeatures ? additionalFeaturesMultiplier : 0)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Bungalow Area (in sq.ft.):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter area"
        onChangeText={(text) => setFormData({ ...formData, area: text })}
      />

      <Text style={styles.label}>Number of Bedrooms:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter bedrooms"
        onChangeText={(text) => setFormData({ ...formData, bedrooms: text })}
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Additional Features:</Text>
        <Button
          title={formData.additionalFeatures ? 'Yes' : 'No'}
          onPress={() => setFormData({ ...formData, additionalFeatures: !formData.additionalFeatures })}
        />
      </View>

      <Button title="Calculate Price" onPress={handleCalculatePrice} />

      {calculatedPrice !== null && <Text style={styles.resultText}>Estimated Price: ${calculatedPrice}</Text>}

      {formErrors && (
        <Text style={styles.errorText}>
          {formErrors.errors.map((error) => error.message).join('\n')}
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default BunglowPrice;
