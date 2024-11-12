import pandas as pd

def json_to_dataframe(json_data):
    # Convert JSON values to native Python types to avoid numpy type issues
    data = [[
        float(json_data['sendtime_1']),
        float(json_data['sender_1']),
        float(json_data['messageID']),
        float(json_data['pos_x1']),
        float(json_data['pos_y1']),
        float(json_data['pos_z1']),
        float(json_data['spd_x1']),
        float(json_data['spd_y1']),
        float(json_data['spd_z1']),
        float(json_data['sendtime_2']),
        float(json_data['sender_2']),
        float(json_data['pos_x2']),
        float(json_data['pos_y2']),
        float(json_data['pos_z2']),
        float(json_data['spd_x2']),
        float(json_data['spd_y2']),
        float(json_data['spd_z2'])
    ]]
    
    columns = [
        'sendtime_1', 'sender_1', 'messageID',
        'pos-x1', 'pos-y1', 'pos-z1',
        'spd-x1', 'spd-y1', 'spd-z1',
        'sendtime_2', 'sender_2',
        'pos-x2', 'pos-y2', 'pos-z2',
        'spd-x2', 'spd-y2', 'spd-z2'
    ]
    
    # Create DataFrame
    input_data = pd.DataFrame(data, columns=columns)
    return input_data
