from flask import Flask, jsonify, request
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')
nltk.download('punkt')
# Custom set of sentiment labels
labels = {
    'pos': 'happy',
    'neg': 'sad',
    'neu': 'neutral',
    'dis': 'disappointing',
    'ang': 'angry',
    'lov': 'loving it',
    'exc': 'excited',
    'cry': 'crying'
}

sia = SentimentIntensityAnalyzer()

def get_sentiments(text):
    # Tokenize text into sentences
    sentences = nltk.sent_tokenize(text)
    # Initialize list of sentiments
    sentiment = []
    
    # Iterate over sentences and determine sentiment
    for sentence in sentences:
        scores = sia.polarity_scores(sentence)
        max_label = max(scores, key=scores.get)
        print(max_label)
        label = labels[max_label]
        sentiment.append(label)
    
    return sentiment

app = Flask(__name__)

@app.route('/sentiment', methods=['POST'])
def analyze_sentiment():
    # Get text from request
    text = request.json['text']
    # Get sentiments from text
    sentiments = get_sentiments(text)
    
    # Return JSON response
    response = {'sentiments': sentiments}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
