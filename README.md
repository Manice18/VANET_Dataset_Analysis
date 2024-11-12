# VANET Dataset Analysis

Misbehavior detection in Vehicular Ad-Hoc Networks (VANETs) enhances traffic safety by identifying malicious nodes that tamper with message logs, potentially leading to hazardous situations. Various machine learning algorithms are employed to detect five main attack types: constant, constant offset, random, random offset, and eventual attacks. Initially, each attack is identified using different algorithms. Then, a multi-classification approach is applied to select the best-performing model. Naïve Bayes, Decision Tree, and Random Forest demonstrate high accuracy in detecting specific attack types. The VeReMi dataset is used for this analysis.

## Navigating the project.

```
├── Dataset             # Has all the datasets
├── notebooks           # Jupyter notebooks
├── models              # Saved model files
├── requirements.txt    # Project dependencies
├── src                 # Source codes
│ ├── api               # API related code
│ ├── models            # Model definitions
│ ├── schemas           # Data schemas
│ └── utils             # Utility functions
├── README.md <br/>
└── tests               # Test files
```

## Running the project

### Running Both FE & BE:

- Run the command `npm run install-dep` to install all the dependencies for the FE.
- cd into the backend directory and follow the below steps.
- Create a Virtual Environment using the command `python3 -m venv .venv` or `python -m venv .venv` (make sure you have virtualenv installed; if not run the command `pip install virtualenv`).
- Run the command `pip install -r requirements.txt` to install all dependencies.
- Now go back to the root directory and run the command `npm run start-dev` to start both FE & BE.

### Only Backend & Model:

- Create a Virtual Environment using the command `python3 -m venv .venv` or `python -m venv .venv` (make sure you have virtualenv installed; if not run the command `pip install virtualenv`).
- Run the command `pip install -r requirements.txt` to install all dependencies.
- Go to the notebooks directory and train the model in `meta.ipynb` which creates the attack type classifier model and the scalar in the models directory.
- To test the model run `make model-test`.
- To run the server run `make run-server`.
- To test the api endpoint run `make api-test`.

### Navigating the routes

`/api/predict-attack-type` : **POST** request which accepts the following in JSON :-

```
{
  "sendtime_1": ,
  "sender_1": ,
  "messageID": ,
  "pos_x1": ,
  "pos_y1": ,
  "pos_z1": ,
  "spd_x1": ,
  "spd_y1": ,
  "spd_z1": ,
  "sendtime_2": ,
  "sender_2": ,
  "pos_x2": ,
  "pos_y2": ,
  "pos_z2": ,
  "spd_x2": ,
  "spd_y2": ,
  "spd_z2":
}
```

### Sample Datasets for Testing the api

For **Attack Type 1**:

```
{
  "sendtime_1": 25265.432701013844,
  "sender_1": 2233.0,
  "messageID": 3657254.0,
  "pos_x1": 5560.0,
  "pos_y1": 5820.0,
  "pos_z1": 1.895,
  "spd_x1": -4.5860308284094335,
  "spd_y1": 29.399178136884053,
  "spd_z1": 0.0,
  "sendtime_2": 25266.432701013844,
  "sender_2": 2233.0,
  "pos_x2": 5560.0,
  "pos_y2": 5820.0,
  "pos_z2": 1.895,
  "spd_x2": -4.588696741775632,
  "spd_y2": 29.41626822301801,
  "spd_z2": 0.0
}
```

For **Attack Type 2**:

```
{
  "sendtime_1": 25238.11193868895,
  "sender_1": 1687.0,
  "messageID": 2006149.0,
  "pos_x1": 6557.816364426161,
  "pos_y1": 5864.31068105258,
  "pos_z1": 1.895,
  "spd_x1": -0.640768619379338,
  "spd_y1": 6.050996793905487,
  "spd_z1": 0.0,
  "sendtime_2": 25239.11193868895,
  "sender_2": 1687.0,
  "pos_x2": 6557.332076450761,
  "pos_y2": 5869.003138026353,
  "pos_z2": 1.895,
  "spd_x2": -0.37908407194232596,
  "spd_y2": 3.67309490920054,
  "spd_z2": 0.0
}
```

For **Attack type 4**:

```
{
  "sendtime_1": 25203.933379168622,
  "sender_1": 175.0,
  "messageID": 207371.0,
  "pos_x1": 10442.946611577645,
  "pos_y1": 4363.958789850585,
  "pos_z1": 1.895,
  "spd_x1": -9.24283161477033,
  "spd_y1": -1.306535935041373,
  "spd_z1": 0.0,
  "sendtime_2": 25204.933379168622,
  "sender_2": 175.0,
  "pos_x2": 3928.647466506809,
  "pos_y2": 10084.960056585258,
  "pos_z2": 1.895,
  "spd_x2": -11.357475420629013,
  "spd_y2": -1.60545495005097,
  "spd_z2": 0.0
}
```

For **Attack Type 8**:

```
{
  "sendtime_1": 25203.757376389112,
  "sender_1": 415.0,
  "messageID": 196758.0,
  "pos_x1": 5906.507000419001,
  "pos_y1": 5676.9244521794735,
  "pos_z1": 1.895,
  "spd_x1": -12.497879779105325,
  "spd_y1": -1.4409084773356051,
  "spd_z1": 0.0,
  "sendtime_2": 25204.757376389112,
  "sender_2": 415.0,
  "pos_x2": 6070.06736305099,
  "pos_y2": 5678.8962643685245,
  "pos_z2": 1.895,
  "spd_x2": -12.05210985112256,
  "spd_y2": -1.084474988940892,
  "spd_z2": 0.0
}

```

For **Attack Type 16**:

```
{
  "sendtime_1": 25212.105743037304,
  "sender_1": 463.0,
  "messageID": 613312.0,
  "pos_x1": 3766.518539392933,
  "pos_y1": 5260.316949995251,
  "pos_z1": 1.895,
  "spd_x1": -5.018977526116932,
  "spd_y1": -11.55161494106275,
  "spd_z1": 0.0,
  "sendtime_2": 25213.105743037304,
  "sender_2": 463.0,
  "pos_x2": 3766.518539392933,
  "pos_y2": 5260.316949995251,
  "pos_z2": 1.895,
  "spd_x2": -5.729603983492924,
  "spd_y2": -13.1871837715313,
  "spd_z2": 0.0
}

```

(on successful response it should return the following JSON:

```
{
    "attack_type": "<the responsible attack type number>"
}
```

)
