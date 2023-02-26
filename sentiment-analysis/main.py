import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

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
    sentiments = []
    
    # Iterate over sentences and determine sentiment
    for sentence in sentences:
        scores = sia.polarity_scores(sentence)
        max_label = max(scores, key=scores.get)
        label = labels[max_label]
        sentiments.append(label)
    
    return sentiments
