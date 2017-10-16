from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://xkstljfv:JlJUXDTZZfrItpHqdmi8wE5mAqo_GQLx@sidewinder.rmq.cloudamqp.com/xkstljfv"

TEST_QUEUE_NAME = 'test'

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

    # construct a message
    sentMsg = {'test': 'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print 'test_basic passed!'

if __name__ == "__main__":
    test_basic()
