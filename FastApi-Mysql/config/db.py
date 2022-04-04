from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://my-api:Familia#56@localhost:3306/indexs" )

meta =MetaData()

conn = engine.connect()
