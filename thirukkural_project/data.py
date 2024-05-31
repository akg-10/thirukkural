import json

# Load your original JSON file
with open('thirukkural.json') as f:
    original_data = json.load(f)

# Transform the data to Django fixture format
fixture_data = []
for kural in original_data['kural']:
    fixture_data.append({
        "model": "kural.thirukkural",
        "pk": kural["Number"],
        "fields": {
            "number": kural["Number"],
            "couplet": kural["Translation"],
            "meaning": kural["explanation"]
        }
    })

# Save the transformed data to a new JSON file
with open('kural/fixtures/thirukkural.json', 'w') as f:
    json.dump(fixture_data, f, indent=4)
