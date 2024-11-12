# Set the PYTHONPATH to the current directory
PYTHONPATH := $(shell pwd)

# Command to run model test
model-test:
	PYTHONPATH=$(PYTHONPATH) python3 tests/model-test.py

# Command to run api test
api-test:
	PYTHONPATH=$(PYTHONPATH) pytest -s tests/api-test.py

# Command to start the server
run-server:
	uvicorn src.api.server:app --reload
