



CREATE TABLE "РегистрГостей"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"ДанныеПаспорта" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"Карта" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Карта"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКарты" NUMBER(10) NULL,

	"ТипКарты" NVARCHAR2(13) NULL,

	"Комната" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВходСотрудника"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"РегистрВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"ДатаРождения" DATE NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РегистрВхода"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Комната" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"НаимДолжности" NVARCHAR2(255) NULL,

	"Карта" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Комната"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Этаж" NUMBER(10) NULL,

	"КоличетсвоМест" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВходГостя"
(

	"primaryKey" RAW(16) NOT NULL,

	"РегистрГостей" RAW(16) NOT NULL,

	"РегистрВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "РегистрГостей"
	ADD CONSTRAINT "РегистрГосте_8201" FOREIGN KEY ("Карта") REFERENCES "Карта" ("primaryKey");

CREATE INDEX "РегистрГосте_7288" on "РегистрГостей" ("Карта");

ALTER TABLE "Карта"
	ADD CONSTRAINT "Карта_FКомната_0" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "Карта_IКомната" on "Карта" ("Комната");

ALTER TABLE "ВходСотрудника"
	ADD CONSTRAINT "ВходСотрудни_6819" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ВходСотрудни_9159" on "ВходСотрудника" ("Сотрудник");

ALTER TABLE "ВходСотрудника"
	ADD CONSTRAINT "ВходСотрудник_531" FOREIGN KEY ("РегистрВхода") REFERENCES "РегистрВхода" ("primaryKey");

CREATE INDEX "ВходСотрудни_7309" on "ВходСотрудника" ("РегистрВхода");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_9849" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2523" on "Сотрудник" ("Должность");

ALTER TABLE "РегистрВхода"
	ADD CONSTRAINT "РегистрВхода__2070" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "РегистрВхода_I_953" on "РегистрВхода" ("Комната");

ALTER TABLE "Должность"
	ADD CONSTRAINT "Должность_FКа_2376" FOREIGN KEY ("Карта") REFERENCES "Карта" ("primaryKey");

CREATE INDEX "Должность_IКарта" on "Должность" ("Карта");

ALTER TABLE "ВходГостя"
	ADD CONSTRAINT "ВходГостя_FРе_1266" FOREIGN KEY ("РегистрГостей") REFERENCES "РегистрГостей" ("primaryKey");

CREATE INDEX "ВходГостя_IРе_4306" on "ВходГостя" ("РегистрГостей");

ALTER TABLE "ВходГостя"
	ADD CONSTRAINT "ВходГостя_FРе_6030" FOREIGN KEY ("РегистрВхода") REFERENCES "РегистрВхода" ("primaryKey");

CREATE INDEX "ВходГостя_IРе_9969" on "ВходГостя" ("РегистрВхода");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


