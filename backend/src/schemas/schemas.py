from pydantic import BaseModel

class attack_data_type(BaseModel):
    sendtime_1: float
    sender_1: float
    messageID: float
    pos_x1: float
    pos_y1: float
    pos_z1: float
    spd_x1: float
    spd_y1: float
    spd_z1: float
    sendtime_2: float
    sender_2: float
    pos_x2: float
    pos_y2: float
    pos_z2: float
    spd_x2: float
    spd_y2: float
    spd_z2: float