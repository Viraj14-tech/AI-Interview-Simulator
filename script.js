//Interview Question Bank
const QUESTION_BANK = {
  "Frontend Developer": {
    Easy: [
      { q: "What is the difference between HTML, CSS, and JavaScript?", topic: "Web Basics", kw: ["html", "structure", "css", "style", "javascript", "behavior", "markup", "presentation"] },
      { q: "What is the box model in CSS?", topic: "CSS", kw: ["content", "padding", "border", "margin", "layout", "width", "height", "box-sizing"] },
      { q: "What is a responsive website?", topic: "Responsive Design", kw: ["mobile", "flexible", "media queries", "viewport", "fluid", "adaptive", "screen size"] },
      { q: "What is a DOM in JavaScript?", topic: "JavaScript", kw: ["document", "object", "model", "html", "tree", "nodes", "manipulation", "api"] },
      { q: "What is the difference between `var`, `let`, and `const`?", topic: "JavaScript", kw: ["scope", "block", "function", "hoisting", "const", "let", "var", "redeclare", "reassign"] },
      { q: "What is an HTML semantic element?", topic: "HTML", kw: ["semantic", "meaning", "header", "footer", "article", "section", "nav", "accessibility"] },
      { q: "What is the difference between `==` and `===` in JavaScript?", topic: "JavaScript", kw: ["strict", "loose", "type", "coercion", "equality", "comparison", "value"] },
      { q: "What is a CSS selector?", topic: "CSS", kw: ["selector", "class", "id", "element", "attribute", "pseudo", "specificity", "target"] },
      { q: "What does `position: relative` do in CSS?", topic: "CSS", kw: ["relative", "offset", "top", "left", "parent", "normal flow", "position", "layout"] },
      { q: "What is localStorage in the browser?", topic: "Web APIs", kw: ["localstorage", "storage", "key", "value", "persist", "browser", "session", "client"] },
    ],
    Medium: [
      { q: "Explain closures in JavaScript.", topic: "JS Concepts", kw: ["function", "scope", "inner", "outer", "variable", "lexical", "enclosure", "access", "retain"] },
      { q: "What is the difference between flexbox and CSS Grid?", topic: "CSS Layout", kw: ["one-dimensional", "two-dimensional", "row", "column", "container", "item", "align", "justify", "grid", "flex"] },
      { q: "What are React hooks and why were they introduced?", topic: "React", kw: ["useState", "useEffect", "functional", "class", "state", "lifecycle", "reuse", "logic", "hooks"] },
      { q: "What is event delegation in JavaScript?", topic: "JavaScript", kw: ["event", "parent", "child", "bubbling", "listener", "dom", "efficiency", "target", "delegate"] },
      { q: "Explain the concept of virtual DOM in React.", topic: "React", kw: ["virtual", "real", "diff", "reconciliation", "performance", "update", "render", "react", "dom"] },
      { q: "What is the difference between `async/await` and Promises?", topic: "Async JS", kw: ["async", "await", "promise", "then", "catch", "synchronous", "asynchronous", "readable", "error"] },
      { q: "What is CSS specificity?", topic: "CSS", kw: ["specificity", "id", "class", "inline", "important", "weight", "override", "cascade", "priority"] },
      { q: "What is a higher-order function in JavaScript?", topic: "Functional JS", kw: ["higher-order", "function", "callback", "map", "filter", "reduce", "return", "argument", "first-class"] },
      { q: "What is debouncing and throttling?", topic: "Performance", kw: ["debounce", "throttle", "delay", "limit", "performance", "scroll", "input", "event", "rate"] },
      { q: "What is a controlled component in React?", topic: "React", kw: ["controlled", "uncontrolled", "state", "input", "value", "onchange", "form", "react", "handler"] },
    ],
    Hard: [
      { q: "Explain JavaScript's event loop, call stack, and asynchronous execution model.", topic: "JS Advanced", kw: ["event loop", "call stack", "heap", "web api", "callback queue", "async", "promise", "microtask", "single-threaded"] },
      { q: "What are Web Workers and when would you use them?", topic: "Performance", kw: ["background", "thread", "main thread", "parallel", "heavy", "computation", "postmessage", "worker", "non-blocking"] },
      { q: "Describe how code splitting and lazy loading work in a React app.", topic: "Optimization", kw: ["import", "dynamic", "lazy", "suspense", "chunk", "bundle", "webpack", "performance", "route"] },
      { q: "What are the key differences between SSR and CSR?", topic: "Architecture", kw: ["server", "client", "seo", "hydration", "initial load", "time to first byte", "csr", "ssr", "nextjs"] },
      { q: "Explain memoization and when to use `useMemo` and `useCallback` in React.", topic: "React", kw: ["cache", "memoize", "usememo", "usecallback", "render", "expensive", "dependency", "performance", "reference"] },
    ]
  },
  "Backend Developer": {
    Easy: [
      { q: "What is an API and what does REST stand for?", topic: "API Basics", kw: ["application", "programming", "interface", "rest", "representational", "state", "transfer", "http", "endpoint"] },
      { q: "What is the difference between GET and POST HTTP methods?", topic: "HTTP", kw: ["get", "retrieve", "post", "send", "body", "url", "idempotent", "request", "data"] },
      { q: "What is a database and what is SQL?", topic: "Databases", kw: ["database", "structured", "query", "language", "tables", "rows", "columns", "relational", "sql"] },
      { q: "What is authentication vs authorization?", topic: "Security", kw: ["authentication", "who", "authorization", "permission", "access", "token", "identity", "role", "secure"] },
      { q: "What is a server and how does it differ from a client?", topic: "Architecture", kw: ["server", "responds", "client", "requests", "service", "host", "resource", "network", "request"] },
      { q: "What is an HTTP status code?", topic: "HTTP", kw: ["status", "200", "404", "500", "response", "code", "error", "success", "redirect"] },
      { q: "What is JSON and why is it used?", topic: "Data Formats", kw: ["json", "object", "notation", "key", "value", "parse", "stringify", "api", "lightweight"] },
      { q: "What is CRUD?", topic: "Databases", kw: ["create", "read", "update", "delete", "operation", "database", "api", "resource", "rest"] },
      { q: "What is an environment variable?", topic: "DevOps Basics", kw: ["environment", "variable", "config", "secret", ".env", "process", "runtime", "deployment", "secure"] },
      { q: "What is middleware in Express.js?", topic: "Node.js", kw: ["middleware", "request", "response", "next", "pipeline", "express", "function", "intercept", "chain"] },
    ],
    Medium: [
      { q: "Explain the difference between SQL and NoSQL databases.", topic: "Databases", kw: ["relational", "schema", "document", "flexible", "sql", "nosql", "scale", "mongodb", "acid", "performance"] },
      { q: "What is JWT and how does token-based authentication work?", topic: "Security", kw: ["json", "web", "token", "jwt", "header", "payload", "signature", "bearer", "decode", "verify"] },
      { q: "Explain RESTful API design principles.", topic: "API Design", kw: ["stateless", "resource", "uri", "http", "crud", "get", "post", "put", "delete", "representation"] },
      { q: "What is caching and why is it used in backend systems?", topic: "Performance", kw: ["cache", "redis", "speed", "store", "ttl", "expire", "hit", "miss", "performance", "reduce"] },
      { q: "What is the N+1 query problem?", topic: "Databases", kw: ["n+1", "query", "orm", "eager", "lazy", "load", "join", "performance", "database", "loop"] },
    ],
    Hard: [
      { q: "Describe the CAP theorem and its implications for distributed systems.", topic: "Distributed Systems", kw: ["consistency", "availability", "partition", "tolerance", "cap", "trade-off", "distributed", "network", "database"] },
      { q: "How would you design a rate limiter for a high-traffic API?", topic: "System Design", kw: ["rate limit", "token bucket", "sliding window", "redis", "throttle", "request", "counter", "time", "algorithm"] },
      { q: "Explain database indexing and how it impacts query performance.", topic: "Databases", kw: ["index", "btree", "clustered", "non-clustered", "query", "slow", "lookup", "disk", "performance", "write"] },
      { q: "What are microservices and how do they differ from monolithic architecture?", topic: "Architecture", kw: ["microservices", "independent", "monolith", "deploy", "scale", "service", "communication", "api", "docker", "container"] },
      { q: "Describe the concept of event-driven architecture and message queues.", topic: "Architecture", kw: ["event", "queue", "publish", "subscribe", "kafka", "rabbitmq", "async", "decouple", "message", "producer"] },
    ]
  },
  "AI/ML Engineer": {
    Easy: [
      { q: "What is the difference between supervised and unsupervised learning?", topic: "ML Basics", kw: ["supervised", "labeled", "unsupervised", "unlabeled", "classification", "clustering", "training", "data", "predict"] },
      { q: "What is overfitting and how can it be prevented?", topic: "Model Training", kw: ["overfit", "training", "test", "generalize", "regularization", "dropout", "validation", "complexity", "bias", "variance"] },
      { q: "What is a neural network?", topic: "Deep Learning", kw: ["neuron", "layer", "input", "output", "hidden", "activation", "weight", "bias", "perceptron", "network"] },
      { q: "What is the role of a loss function in machine learning?", topic: "ML Concepts", kw: ["loss", "error", "minimize", "gradient", "optimize", "training", "prediction", "mse", "cross-entropy"] },
      { q: "What does the term 'feature engineering' mean?", topic: "Data Prep", kw: ["feature", "variable", "transform", "encode", "normalize", "select", "extract", "input", "domain"] },
      { q: "What is the difference between classification and regression?", topic: "ML Basics", kw: ["classification", "category", "regression", "continuous", "output", "predict", "label", "value", "model"] },
      { q: "What is a training set vs a test set?", topic: "ML Basics", kw: ["training", "test", "split", "evaluate", "generalize", "data", "unseen", "model", "performance"] },
      { q: "What is normalization in machine learning?", topic: "Data Prep", kw: ["normalize", "scale", "min-max", "standard", "mean", "variance", "feature", "range", "preprocess"] },
      { q: "What is cross-validation?", topic: "Evaluation", kw: ["cross-validation", "fold", "k-fold", "split", "generalize", "evaluate", "overfitting", "train", "test", "performance"] },
      { q: "What is a hyperparameter?", topic: "Model Training", kw: ["hyperparameter", "tune", "learning rate", "epochs", "batch", "configure", "search", "grid", "optimize"] },
    ],
    Medium: [
      { q: "Explain how gradient descent works in model training.", topic: "Optimization", kw: ["gradient", "descent", "derivative", "learning rate", "update", "weight", "minimum", "loss", "epoch", "batch"] },
      { q: "What is the difference between precision and recall?", topic: "Evaluation", kw: ["precision", "recall", "true positive", "false positive", "false negative", "f1", "tradeoff", "classification", "metric"] },
      { q: "What is transfer learning and when is it useful?", topic: "Deep Learning", kw: ["transfer", "pretrained", "fine-tune", "features", "bert", "resnet", "domain", "adapt", "weights", "reuse"] },
      { q: "Explain the concept of regularization (L1 vs L2).", topic: "ML Concepts", kw: ["regularization", "l1", "l2", "lasso", "ridge", "overfitting", "penalty", "sparse", "weights", "constraint"] },
      { q: "What is a confusion matrix?", topic: "Evaluation", kw: ["confusion", "matrix", "true positive", "false positive", "true negative", "false negative", "accuracy", "recall", "precision"] },
    ],
    Hard: [
      { q: "Describe the attention mechanism in transformer models.", topic: "Transformers", kw: ["attention", "query", "key", "value", "softmax", "weight", "self-attention", "multi-head", "bert", "transformer"] },
      { q: "Explain how backpropagation works mathematically.", topic: "Deep Learning", kw: ["backprop", "chain rule", "gradient", "derivative", "forward", "backward", "weight", "loss", "output", "layer"] },
      { q: "What are the challenges with imbalanced datasets and how do you handle them?", topic: "Data", kw: ["imbalanced", "oversample", "undersample", "smote", "class weight", "precision", "recall", "f1", "bias", "augment"] },
      { q: "What is the difference between batch normalization and layer normalization?", topic: "Architecture", kw: ["batch norm", "layer norm", "normalize", "mean", "variance", "training", "inference", "covariate", "shift", "layer"] },
      { q: "Explain GANs (Generative Adversarial Networks) and how they are trained.", topic: "Generative AI", kw: ["generator", "discriminator", "adversarial", "gan", "loss", "fake", "real", "nash", "equilibrium", "training"] },
    ]
  },
  "HR Manager": {
    Easy: [
      { q: "Tell me about yourself and your background in HR.", topic: "Introduction", kw: ["experience", "recruitment", "onboarding", "employee", "policies", "communication", "team", "organization", "management"] },
      { q: "What are the key responsibilities of an HR manager?", topic: "HR Basics", kw: ["recruitment", "hiring", "training", "payroll", "compliance", "policy", "performance", "retention", "culture", "benefit"] },
      { q: "How do you handle employee conflicts?", topic: "Conflict Resolution", kw: ["listen", "mediation", "neutral", "resolution", "communication", "both sides", "policy", "fair", "document", "escalate"] },
      { q: "What is onboarding and why is it important?", topic: "Onboarding", kw: ["onboarding", "orientation", "integrate", "culture", "training", "productivity", "retention", "first day", "experience", "welcome"] },
      { q: "What is the purpose of a performance review?", topic: "Performance", kw: ["review", "feedback", "goal", "improvement", "annual", "performance", "development", "rating", "appraisal", "salary"] },
    ],
    Medium: [
      { q: "How do you attract and retain top talent in a competitive market?", topic: "Talent Management", kw: ["employer brand", "compensation", "culture", "benefits", "career growth", "recognition", "flexible", "retention", "candidate"] },
      { q: "Explain the concept of employee engagement and how you measure it.", topic: "Engagement", kw: ["engagement", "survey", "pulse", "satisfaction", "motivation", "productivity", "culture", "recognition", "feedback", "morale"] },
      { q: "How do you ensure compliance with labor laws and HR regulations?", topic: "Compliance", kw: ["compliance", "labor law", "policy", "update", "audit", "documentation", "training", "legal", "regulation", "review"] },
      { q: "What strategies do you use for diversity and inclusion?", topic: "D&I", kw: ["diversity", "inclusion", "equity", "bias", "representation", "training", "culture", "policy", "hire", "belonging"] },
      { q: "Describe your experience with compensation and benefits management.", topic: "Compensation", kw: ["salary", "benchmark", "market", "benefits", "compensation", "structure", "equity", "bonus", "review", "band"] },
    ],
    Hard: [
      { q: "How would you design a leadership development program from scratch?", topic: "L&D", kw: ["competency", "360", "mentoring", "succession", "coaching", "program", "assessment", "development", "leadership", "feedback"] },
      { q: "How do you handle downsizing or restructuring while maintaining morale?", topic: "Change Mgmt", kw: ["transparent", "communication", "severance", "support", "morale", "restructure", "outplacement", "empathy", "trust", "transition"] },
      { q: "What metrics do you use to measure HR effectiveness and ROI?", topic: "HR Metrics", kw: ["kpi", "turnover", "time-to-hire", "cost-per-hire", "engagement", "absenteeism", "roi", "productivity", "metric", "data"] },
      { q: "How do you build a high-performance culture aligned with business goals?", topic: "Culture", kw: ["culture", "values", "alignment", "performance", "accountability", "trust", "communication", "goals", "recognition", "behavior"] },
      { q: "Describe how you've managed organizational change and minimized resistance.", topic: "Change Mgmt", kw: ["change", "communication", "stakeholder", "buy-in", "resistance", "transparent", "involve", "training", "feedback", "adapt"] },
    ]
  },
  "Data Analyst": {
    Easy: [
      { q: "What is the difference between data cleaning and data transformation?", topic: "Data Prep", kw: ["clean", "missing", "duplicate", "transform", "normalize", "encode", "reshape", "filter", "format", "outlier"] },
      { q: "What tools do you use for data analysis?", topic: "Tools", kw: ["excel", "python", "pandas", "sql", "tableau", "power bi", "r", "visualization", "query", "analysis"] },
      { q: "What is a KPI and why is it important?", topic: "Business Intelligence", kw: ["kpi", "key", "performance", "indicator", "metric", "goal", "measure", "business", "track", "target"] },
      { q: "What is the difference between mean, median, and mode?", topic: "Statistics", kw: ["mean", "average", "median", "middle", "mode", "frequent", "central", "tendency", "distribution", "statistics"] },
      { q: "What is a pivot table?", topic: "Excel/Data", kw: ["pivot", "summarize", "aggregate", "rows", "columns", "values", "excel", "cross-tab", "group", "table"] },
    ],
    Medium: [
      { q: "How do you handle missing data in a dataset?", topic: "Data Cleaning", kw: ["impute", "mean", "median", "drop", "flag", "mode", "forward fill", "interpolate", "missing", "null"] },
      { q: "Explain the difference between correlation and causation.", topic: "Statistics", kw: ["correlation", "causation", "relationship", "cause", "effect", "confound", "variable", "data", "spurious", "bias"] },
      { q: "What is A/B testing and how do you analyze results?", topic: "Experimentation", kw: ["ab test", "control", "variant", "hypothesis", "p-value", "significance", "sample", "split", "metric", "conversion"] },
      { q: "Describe your experience with data visualization best practices.", topic: "Visualization", kw: ["chart", "bar", "line", "pie", "axis", "label", "color", "audience", "insight", "storytelling"] },
      { q: "How do you validate the accuracy of your analysis?", topic: "Quality", kw: ["validate", "sanity check", "cross-check", "source", "assumption", "peer review", "reproduce", "outlier", "test", "document"] },
    ],
    Hard: [
      { q: "Explain cohort analysis and when you would use it.", topic: "Analytics", kw: ["cohort", "group", "time", "retention", "behavior", "segment", "user", "track", "period", "lifetime"] },
      { q: "How would you design a dashboard for executive stakeholders?", topic: "Reporting", kw: ["executive", "kpi", "summary", "drill-down", "real-time", "filter", "simple", "business", "metric", "decision"] },
      { q: "Describe how you would identify anomalies in a time series dataset.", topic: "Advanced Analytics", kw: ["anomaly", "outlier", "z-score", "rolling", "threshold", "seasonal", "decompose", "detection", "spike", "trend"] },
      { q: "What is the difference between OLTP and OLAP systems?", topic: "Databases", kw: ["oltp", "transactional", "olap", "analytical", "read", "write", "schema", "star", "fact", "dimension"] },
      { q: "How would you build a churn prediction model?", topic: "Predictive Analytics", kw: ["churn", "predict", "feature", "logistic", "classification", "retention", "model", "accuracy", "train", "behavior"] },
    ]
  },
  "Cybersecurity": {
    Easy: [
      { q: "What is the difference between a virus and a worm?", topic: "Malware", kw: ["virus", "host", "file", "worm", "self-replicate", "network", "spread", "attach", "propagate", "execute"] },
      { q: "What is phishing and how can you prevent it?", topic: "Social Engineering", kw: ["phishing", "email", "fake", "credential", "link", "awareness", "training", "verify", "spam", "sender"] },
      { q: "What is a firewall and what does it do?", topic: "Network Security", kw: ["firewall", "filter", "traffic", "block", "allow", "rule", "network", "inbound", "outbound", "packet"] },
      { q: "What is the principle of least privilege?", topic: "Access Control", kw: ["least privilege", "minimal", "access", "need", "permission", "role", "restrict", "user", "reduce", "attack"] },
      { q: "What is encryption and why is it important?", topic: "Cryptography", kw: ["encrypt", "cipher", "key", "data", "protect", "decryption", "aes", "tls", "confidentiality", "secure"] },
    ],
    Medium: [
      { q: "Explain the concept of a man-in-the-middle attack.", topic: "Attacks", kw: ["mitm", "intercept", "traffic", "ssl", "certificate", "eavesdrop", "relay", "communication", "attacker", "forge"] },
      { q: "What is the OWASP Top 10 and why is it important?", topic: "Web Security", kw: ["owasp", "injection", "xss", "csrf", "top 10", "vulnerability", "web", "risk", "mitigation", "authentication"] },
      { q: "What is a penetration test and what are its phases?", topic: "Pen Testing", kw: ["pentest", "reconnaissance", "scanning", "exploitation", "reporting", "scope", "vulnerability", "ethical", "assessment", "phase"] },
      { q: "How does public key infrastructure (PKI) work?", topic: "Cryptography", kw: ["pki", "certificate", "public key", "private key", "ca", "trust", "ssl", "tls", "digital signature", "verify"] },
      { q: "What is the difference between IDS and IPS?", topic: "Monitoring", kw: ["ids", "intrusion detection", "ips", "intrusion prevention", "alert", "block", "monitor", "signature", "anomaly", "network"] },
    ],
    Hard: [
      { q: "Describe how you would respond to a ransomware incident.", topic: "Incident Response", kw: ["isolate", "backup", "restore", "ioc", "forensics", "notify", "contain", "eradicate", "recover", "report"] },
      { q: "Explain zero-trust security architecture.", topic: "Architecture", kw: ["zero trust", "never trust", "verify", "least privilege", "micro-segment", "identity", "multi-factor", "access", "policy", "authenticate"] },
      { q: "How does SQL injection work and how do you prevent it?", topic: "Web Security", kw: ["sql injection", "query", "input", "parameterize", "prepared statement", "escape", "validate", "waf", "database", "malicious"] },
      { q: "What is threat modeling and how would you apply it?", topic: "Threat Modeling", kw: ["threat model", "stride", "attacker", "asset", "risk", "data flow", "trust boundary", "mitigate", "diagram", "prioritize"] },
      { q: "Explain the difference between symmetric and asymmetric encryption.", topic: "Cryptography", kw: ["symmetric", "shared key", "aes", "asymmetric", "public", "private", "rsa", "key exchange", "performance", "tls"] },
    ]
  },
  "DevOps Engineer": {
    Easy: [
      { q: "What is CI/CD?", topic: "DevOps Basics", kw: ["ci", "cd", "continuous", "integration", "delivery", "deployment", "pipeline", "automate", "build", "test"] },
      { q: "What is Docker and what problem does it solve?", topic: "Containers", kw: ["docker", "container", "image", "isolate", "environment", "portable", "dependency", "ship", "run", "consistent"] },
      { q: "What is version control and why is Git important?", topic: "Version Control", kw: ["git", "version", "control", "commit", "branch", "merge", "track", "history", "collaborate", "repository"] },
      { q: "What is the difference between a VM and a container?", topic: "Infrastructure", kw: ["vm", "container", "hypervisor", "os", "lightweight", "isolate", "kernel", "resource", "overhead", "image"] },
      { q: "What is infrastructure as code (IaC)?", topic: "IaC", kw: ["infrastructure", "code", "terraform", "ansible", "automate", "provision", "version", "reproducible", "script", "deploy"] },
    ],
    Medium: [
      { q: "Explain the blue-green deployment strategy.", topic: "Deployment", kw: ["blue", "green", "swap", "zero downtime", "rollback", "traffic", "route", "environment", "deploy", "cutover"] },
      { q: "What is Terraform and how does it work?", topic: "IaC", kw: ["terraform", "provider", "resource", "state", "plan", "apply", "hcl", "module", "infrastructure", "idempotent"] },
      { q: "What is a Kubernetes pod?", topic: "Kubernetes", kw: ["pod", "container", "unit", "deploy", "restart", "namespace", "node", "spec", "yaml", "lifecycle"] },
      { q: "What is observability and how does it differ from monitoring?", topic: "Observability", kw: ["observability", "metric", "log", "trace", "monitoring", "unknown", "pillar", "debug", "system", "state"] },
      { q: "How do you manage secrets in a DevOps pipeline?", topic: "Security", kw: ["secret", "vault", "env", "inject", "rotate", "encrypt", "access", "k8s", "aws secrets", "least privilege"] },
    ],
    Hard: [
      { q: "How would you design a zero-downtime deployment for a high-traffic application?", topic: "Deployment", kw: ["zero downtime", "rolling", "blue green", "canary", "health check", "drain", "load balancer", "rollback", "db migration", "traffic"] },
      { q: "Explain the concept of GitOps.", topic: "GitOps", kw: ["gitops", "git", "source of truth", "argocd", "flux", "reconcile", "declarative", "pull", "repo", "sync"] },
      { q: "What is chaos engineering?", topic: "Resilience", kw: ["chaos", "failure", "inject", "resilience", "experiment", "hypothesis", "blast radius", "netflix", "recover", "observe"] },
      { q: "How would you set up a multi-region deployment?", topic: "Architecture", kw: ["multi-region", "latency", "failover", "dns", "replicate", "data residency", "active-active", "routing", "cost", "sync"] },
      { q: "How do you handle database migrations in a CI/CD pipeline?", topic: "CI/CD", kw: ["migration", "schema", "backward compatible", "flyway", "liquibase", "rollback", "pipeline", "test", "version", "deploy"] },
    ]
  },
  "Product Manager": {
    Easy: [
      { q: "What does a Product Manager do?", topic: "PM Basics", kw: ["product", "roadmap", "stakeholder", "prioritize", "vision", "feature", "team", "customer", "strategy", "delivery"] },
      { q: "What is a product roadmap?", topic: "Planning", kw: ["roadmap", "timeline", "feature", "priority", "goal", "quarter", "vision", "release", "plan", "communicate"] },
      { q: "What is a minimum viable product (MVP)?", topic: "Product Strategy", kw: ["mvp", "minimum", "viable", "learn", "validate", "hypothesis", "core", "ship", "feedback", "iteration"] },
      { q: "What is a user story?", topic: "Agile", kw: ["user story", "as a", "want", "so that", "acceptance", "criteria", "feature", "agile", "sprint", "backlog"] },
      { q: "What is a sprint in Scrum?", topic: "Agile", kw: ["sprint", "scrum", "iteration", "timebox", "goal", "backlog", "review", "retrospective", "team", "deliver"] },
    ],
    Medium: [
      { q: "How do you prioritize features on a product roadmap?", topic: "Prioritization", kw: ["rice", "moscow", "ice", "value", "effort", "impact", "priority", "stakeholder", "framework", "score"] },
      { q: "How do you measure product-market fit?", topic: "Product Strategy", kw: ["product-market fit", "retention", "nps", "survey", "churn", "growth", "engagement", "must-have", "signal", "cohort"] },
      { q: "What is the difference between output and outcome?", topic: "Strategy", kw: ["output", "outcome", "feature", "impact", "result", "ship", "value", "measure", "behavior", "change"] },
      { q: "What is a north star metric?", topic: "Metrics", kw: ["north star", "metric", "single", "focus", "growth", "value", "align", "team", "measure", "outcome"] },
      { q: "How do you work with engineers and designers as a PM?", topic: "Collaboration", kw: ["engineer", "designer", "collaborate", "spec", "tradeoff", "technical", "handoff", "align", "sprint", "communication"] },
    ],
    Hard: [
      { q: "How would you turn around a declining product?", topic: "Product Strategy", kw: ["decline", "retention", "churn", "root cause", "pivot", "reposition", "user", "research", "monetize", "revive"] },
      { q: "How do you make a build vs buy vs partner decision?", topic: "Strategy", kw: ["build", "buy", "partner", "core", "competency", "cost", "time", "integration", "risk", "differentiate"] },
      { q: "How do you manage competing stakeholder priorities?", topic: "Stakeholders", kw: ["stakeholder", "conflict", "priority", "align", "data", "negotiate", "tradeoff", "roadmap", "communicate", "influence"] },
      { q: "Describe how you would launch a product in a new market.", topic: "Go-to-Market", kw: ["market", "research", "segment", "position", "channel", "localize", "pilot", "feedback", "iterate", "launch"] },
      { q: "How do you define and measure success for a new feature?", topic: "Metrics", kw: ["success", "metric", "baseline", "hypothesis", "experiment", "ab test", "rollout", "impact", "goal", "measure"] },
    ]
  }
};

//State management for quiz flow, user session, and scoring
let state = {
  role: null, diff: null, qCount: 5,
  questions: [], qi: 0,
  answers: [], scores: [],
  timer: null, timeLeft: 120,
  totalPossible: 0,
  currentUser: null   // stores email key
};

const TIMER_MAX = 120;

const FEEDBACK_CONFIG = {
  good: { emoji: '🎯', verdict: 'Excellent Answer!', color: 'var(--good)' },
  avg: { emoji: '💡', verdict: 'Pretty Good', color: 'var(--avg)' },
  weak: { emoji: '📚', verdict: 'Needs Improvement', color: 'var(--bad)' },
  skip: { emoji: '⏭', verdict: 'Skipped', color: 'var(--text-muted)' },
};

//THEME TOGGLE
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = theme === 'dark' ? '🌙' : '☀️';
  document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
  localStorage.setItem('iq_theme', theme);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('authThemeToggle').addEventListener('click', toggleTheme);

//Local storage
function getUsers() { return JSON.parse(localStorage.getItem('iq_users') || '{}'); }
function saveUsers(u) { localStorage.setItem('iq_users', JSON.stringify(u)); }
function getSession() { return localStorage.getItem('iq_session'); }
function setSession(key) { localStorage.setItem('iq_session', key); }
function clearSession() { localStorage.removeItem('iq_session'); }

function getUserData(emailKey) {
  return getUsers()[emailKey] || null;
}
function saveUserData(emailKey, data) {
  const users = getUsers();
  users[emailKey] = data;
  saveUsers(users);
}

// Email key normalizer
function normalizeEmail(email) { return email.trim().toLowerCase(); }

// Basic email format check
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

// Simple obfuscation (client-side only project)
function obfuscate(str) { return btoa(str.split('').reverse().join('')); }

// Password visibility toggle
function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';

  // Swap SVG icon to show/hide state
  btn.innerHTML = isHidden
    ? `<svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
             <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
             <line x1="1" y1="1" x2="23" y2="23"/>
           </svg>`
    : `<svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
             <circle cx="12" cy="12" r="3"/>
           </svg>`;
}

// Switch between login and register tabs
function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('loginForm').style.display = isLogin ? 'block' : 'none';
  document.getElementById('registerForm').style.display = isLogin ? 'none' : 'block';
  document.getElementById('loginTab').classList.toggle('active', isLogin);
  document.getElementById('registerTab').classList.toggle('active', !isLogin);
  document.getElementById('loginError').textContent = '';
  document.getElementById('registerError').textContent = '';
}

// Login and password validation, session management
function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';

  if (!email || !password) { errEl.textContent = 'Please fill in all fields.'; return; }
  if (!isValidEmail(email)) { errEl.textContent = 'Please enter a valid email address.'; return; }

  const key = normalizeEmail(email);
  const users = getUsers();

  if (!users[key]) { errEl.textContent = 'No account found with this email.'; return; }
  if (users[key].password !== obfuscate(password)) { errEl.textContent = 'Incorrect password.'; return; }

  setSession(key);
  loginSuccess(key);
}

//  REGISTER  (username + email + password + confirm)

function handleRegister() {
  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  const errEl = document.getElementById('registerError');
  errEl.textContent = '';

  if (!username || !email || !password || !confirm) { errEl.textContent = 'Please fill in all fields.'; return; }
  if (username.length < 2) { errEl.textContent = 'Name must be at least 2 characters.'; return; }
  if (!isValidEmail(email)) { errEl.textContent = 'Please enter a valid email address.'; return; }
  if (password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }
  if (password !== confirm) { errEl.textContent = 'Passwords do not match.'; return; }

  const key = normalizeEmail(email);
  const users = getUsers();
  if (users[key]) { errEl.textContent = 'An account with this email already exists.'; return; }

  users[key] = {
    username,
    email: key,
    password: obfuscate(password),
    history: [],
    streak: 0,
    lastDate: null
  };
  saveUsers(users);
  setSession(key);
  loginSuccess(key);
}


//  LOGIN SUCCESS

function loginSuccess(emailKey) {
  state.currentUser = emailKey;
  const data = getUserData(emailKey);
  updateStreak(emailKey);

  const displayName = data.username || data.email;
  document.getElementById('topBar').style.display = 'flex';
  document.getElementById('topBarUser').textContent = `👋 Hi, ${displayName}`;
  document.getElementById('setupHeading').textContent = `Ready to practice, ${displayName}?`;

  refreshStreakBadge(emailKey);
  showScreen('setup-screen');
  populateSetupStats(emailKey);
  populateHistory(emailKey);
}

//  STREAK

function updateStreak(emailKey) {
  const data = getUserData(emailKey);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (data.lastDate === today) return;
  data.streak = data.lastDate === yesterday ? (data.streak || 0) + 1 : 1;
  data.lastDate = today;
  saveUserData(emailKey, data);
}

function refreshStreakBadge(emailKey) {
  const data = getUserData(emailKey);
  document.getElementById('streakBadge').textContent = `🔥 ${data.streak || 0}`;
}


//  LOGOUT

document.getElementById('logoutBtn').addEventListener('click', () => {
  clearSession();
  state.currentUser = null;
  document.getElementById('topBar').style.display = 'none';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').textContent = '';
  showScreen('auth-screen');
});


//  SETUP STATS

function populateSetupStats(emailKey) {
  const data = getUserData(emailKey);
  const history = data.history || [];
  const count = history.length;
  const avg = count > 0 ? Math.round(history.reduce((s, h) => s + h.pct, 0) / count) : null;

  document.getElementById('statInterviews').textContent = `📋 ${count} interview${count !== 1 ? 's' : ''}`;
  document.getElementById('statAvg').textContent = `📊 Avg: ${avg !== null ? avg + '%' : '—'}`;
  document.getElementById('statStreak').textContent = `🔥 ${data.streak || 0} day streak`;
}

//  History

function populateHistory(emailKey) {
  const data = getUserData(emailKey);
  const history = (data.history || []).slice(-5).reverse();
  const card = document.getElementById('historyCard');
  const list = document.getElementById('historyList');

  if (history.length === 0) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  list.innerHTML = history.map(h => {
    const col = h.pct >= 65 ? 'var(--good)' : h.pct >= 35 ? 'var(--avg)' : 'var(--bad)';
    return `<div class="history-item">
            <div class="history-meta">
                <span class="history-role">${h.role}</span>
                <span class="history-diff">${h.diff} · ${h.qCount} Qs</span>
                <span class="history-date">${h.date}</span>
            </div>
            <div class="history-score" style="color:${col}">${h.pct}%</div>
        </div>`;
  }).join('');
}

function saveSessionToHistory(pct) {
  if (!state.currentUser) return;
  const data = getUserData(state.currentUser);
  if (!data.history) data.history = [];
  data.history.push({
    role: state.role, diff: state.diff,
    qCount: state.questions.length, pct,
    date: new Date().toLocaleDateString()
  });
  if (data.history.length > 20) data.history = data.history.slice(-20);
  saveUserData(state.currentUser, data);
}


//  Utlities

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}


// Setup screen interactions

document.querySelectorAll('#roleGrid .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#roleGrid .chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    state.role = chip.dataset.role;
    checkStartReady();
  });
});

document.querySelectorAll('[data-diff]').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('[data-diff]').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    state.diff = chip.dataset.diff;
    checkStartReady();
  });
});

document.querySelectorAll('.qcount-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.qcount-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    state.qCount = parseInt(chip.dataset.count);
    checkStartReady();
  });
});

function checkStartReady() {
  document.getElementById('startBtn').disabled = !(state.role && state.diff && state.qCount);
}

document.getElementById('startBtn').addEventListener('click', startInterview);


//  Start interview: 

function startInterview() {
  const pool = QUESTION_BANK[state.role]?.[state.diff] || [];
  let extended = [...pool];
  while (extended.length < state.qCount) extended = [...extended, ...pool];
  state.questions = shuffle(extended).slice(0, state.qCount);
  state.qi = 0;
  state.answers = [];
  state.scores = [];
  state.totalPossible = 0;

  document.getElementById('qTotal').textContent = state.questions.length;

  const data = getUserData(state.currentUser);
  const name = data ? (data.username || data.email) : 'User';
  document.getElementById('interviewUserTag').textContent = `👋 ${name}`;

  showScreen('interview-screen');
  loadQuestion();
}


//  Load question and start timer

function loadQuestion() {
  const q = state.questions[state.qi];
  document.getElementById('qNum').textContent = state.qi + 1;
  document.getElementById('qTopic').textContent = q.topic;
  document.getElementById('qText').textContent = q.q;
  document.getElementById('answerInput').value = '';
  document.getElementById('typingBadge').textContent = '0 words';
  document.getElementById('progressFill').style.width = (state.qi / state.questions.length * 100) + '%';

  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  requestAnimationFrame(() => { card.style.animation = 'slideUp 0.35s ease'; });

  startTimer(TIMER_MAX);
}


//  Timer logic: countdown + visual ring + color change at thresholds

function startTimer(seconds) {
  clearInterval(state.timer);
  state.timeLeft = seconds;
  updateTimerUI(seconds);
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI(state.timeLeft);
    if (state.timeLeft <= 0) { clearInterval(state.timer); handleSubmit(true); }
  }, 1000);
}

function updateTimerUI(t) {
  const mm = String(Math.floor(t / 60)).padStart(2, '0');
  const ss = String(t % 60).padStart(2, '0');
  document.getElementById('timerText').textContent = `${mm}:${ss}`;

  const circ = document.getElementById('timerCircle');
  circ.style.strokeDashoffset = 157 * (1 - t / TIMER_MAX);
  circ.style.stroke = t > 60 ? 'var(--accent3)' : t > 30 ? 'var(--avg)' : 'var(--bad)';
}

// Word Counter

document.getElementById('answerInput').addEventListener('input', () => {
  const words = document.getElementById('answerInput').value.trim().split(/\s+/).filter(Boolean);
  document.getElementById('typingBadge').textContent = `${words.length} words`;
});


//  Submit/Skip 

document.getElementById('submitBtn').addEventListener('click', () => handleSubmit(false));
document.getElementById('skipBtn').addEventListener('click', () => handleSubmit(false, true));
document.getElementById('nextBtn').addEventListener('click', proceedNext);
document.getElementById('restartBtn').addEventListener('click', goToSetup);
document.getElementById('historyBtn').addEventListener('click', () => { goToSetup(); });

function goToSetup() {
  showScreen('setup-screen');
  if (state.currentUser) {
    populateSetupStats(state.currentUser);
    populateHistory(state.currentUser);
  }
}

function handleSubmit(timedOut = false, skipped = false) {
  clearInterval(state.timer);
  const answer = document.getElementById('answerInput').value;
  const q = state.questions[state.qi];
  const result = evaluateAnswer(answer, q.kw, skipped);

  state.answers.push({ answer, ...result, q: q.q, kw: q.kw });
  state.scores.push(result);
  state.totalPossible += q.kw.length;

  showFeedback(result, q.kw, timedOut, skipped);
}


//  Evaluate answers

function evaluateAnswer(answer, keywords, skipped) {
  if (skipped || !answer.trim()) {
    return { score: 0, max: keywords.length, matched: [], missed: keywords, tier: 'skip' };
  }
  const lower = answer.toLowerCase();
  const matched = keywords.filter(kw => lower.includes(kw.toLowerCase()));
  const missed = keywords.filter(kw => !lower.includes(kw.toLowerCase()));
  const pct = matched.length / keywords.length;
  const tier = pct >= 0.65 ? 'good' : pct >= 0.35 ? 'avg' : 'weak';
  return { score: matched.length, max: keywords.length, matched, missed, tier };
}

//  Feedback

function showFeedback(result, keywords, timedOut, skipped) {
  const cfg = FEEDBACK_CONFIG[result.tier];
  const note = timedOut ? ' (Time expired)' : skipped ? ' (Skipped)' : '';

  document.getElementById('feedbackEmoji').textContent = cfg.emoji;
  document.getElementById('feedbackVerdict').textContent = cfg.verdict;
  document.getElementById('feedbackVerdict').style.color = cfg.color;
  document.getElementById('feedbackScoreLine').textContent =
    `Score: ${result.score}/${result.max} keywords matched${note}`;

  const kr = document.getElementById('keywordRow');
  kr.innerHTML = '';
  keywords.forEach(kw => {
    const span = document.createElement('span');
    span.className = 'kw-tag ' + (result.matched.includes(kw) ? 'kw-hit' : 'kw-miss');
    span.textContent = kw;
    kr.appendChild(span);
  });

  document.getElementById('nextBtn').textContent =
    state.qi < state.questions.length - 1 ? 'Next Question →' : 'View Report →';

  document.getElementById('feedbackOverlay').classList.add('show');
}

function proceedNext() {
  document.getElementById('feedbackOverlay').classList.remove('show');
  state.qi++;
  state.qi < state.questions.length ? loadQuestion() : showReport();
}

//  Report

function showReport() {
  showScreen('report-screen');
  document.getElementById('progressFill').style.width = '100%';

  const totalScore = state.scores.reduce((s, r) => s + r.score, 0);
  const pct = Math.round(totalScore / state.totalPossible * 100);

  const fg = document.getElementById('scoreRingFg');
  fg.style.strokeDashoffset = 339;
  fg.style.stroke = pct >= 65 ? 'var(--good)' : pct >= 35 ? 'var(--avg)' : 'var(--bad)';
  requestAnimationFrame(() => {
    setTimeout(() => { fg.style.strokeDashoffset = 339 * (1 - pct / 100); }, 100);
  });

  document.getElementById('scoreBig').textContent = totalScore;
  document.getElementById('scorePct').textContent = `${pct}%`;

  let verdict, sub;
  if (pct >= 80) { verdict = '🏆 Outstanding'; sub = `Excellent work! You're well-prepared for ${state.role}.`; }
  else if (pct >= 60) { verdict = '✅ Strong Performance'; sub = `Good grasp of core concepts. Keep refining depth.`; }
  else if (pct >= 40) { verdict = '📈 Average Result'; sub = `You have the basics. Work on technical vocabulary.`; }
  else { verdict = '🔁 Keep Practicing'; sub = `Review key topics for ${state.role}. Consistent practice wins!`; }

  document.getElementById('verdictLabel').textContent = verdict;
  document.getElementById('verdictSub').textContent = sub;
  document.getElementById('reportTitle').textContent = `${state.role} · ${state.diff}`;

  const strong = state.scores.filter(s => s.tier === 'good').length;
  const avg = state.scores.filter(s => s.tier === 'avg').length;
  const weak = state.scores.filter(s => s.tier === 'weak' || s.tier === 'skip').length;
  document.getElementById('mCorrect').textContent = strong;
  document.getElementById('mAvg').textContent = avg;
  document.getElementById('mWeak').textContent = weak;

  const bl = document.getElementById('breakdownList');
  bl.innerHTML = '';
  state.answers.forEach((a, i) => {
    const pctQ = a.max > 0 ? a.score / a.max : 0;
    const col = a.tier === 'good' ? 'var(--good)' : a.tier === 'avg' ? 'var(--avg)' : 'var(--bad)';
    const label = a.q.length > 65 ? a.q.slice(0, 65) + '…' : a.q;
    bl.innerHTML += `<div class="breakdown-item">
            <div class="bd-q">Q${i + 1}: ${label}</div>
            <div class="bd-bar-wrap"><div class="bd-bar" style="width:${pctQ * 100}%;background:${col}"></div></div>
            <div class="bd-score" style="color:${col}">${a.score}/${a.max}</div>
        </div>`;
  });

  // Missed keywords panel
  const allMissed = [...new Set(state.answers.flatMap(a => a.missed || []))];
  const missedCard = document.getElementById('missedCard');
  const missedEl = document.getElementById('missedKeywords');
  if (allMissed.length > 0) {
    missedCard.style.display = 'block';
    missedEl.innerHTML = allMissed.map(kw => `<span class="kw-tag kw-miss">${kw}</span>`).join('');
  } else {
    missedCard.style.display = 'none';
  }

  buildChart(state.answers);
  saveSessionToHistory(pct);
  if (state.currentUser) refreshStreakBadge(state.currentUser);
}


//  CHART

function buildChart(answers) {
  const canvas = document.getElementById('performanceChart');
  if (window._chartInst) window._chartInst.destroy();

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? '#7878a8' : '#5858a0';

  const pcts = answers.map(a => a.max > 0 ? Math.round(a.score / a.max * 100) : 0);
  const colors = answers.map(a =>
    a.tier === 'good' ? 'rgba(0,206,201,0.85)'
      : a.tier === 'avg' ? 'rgba(253,203,110,0.85)'
        : 'rgba(253,121,168,0.85)'
  );

  window._chartInst = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: answers.map((_, i) => `Q${i + 1}`),
      datasets: [{ data: pcts, backgroundColor: colors, borderRadius: 8, borderSkipped: false }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: tickColor, font: { size: 13 } } },
        y: {
          min: 0, max: 100, grid: { color: gridColor },
          ticks: { color: tickColor, font: { size: 13 }, callback: v => v + '%' }
        }
      }
    }
  });
}

(function init() {
  // Restore theme
  applyTheme(localStorage.getItem('iq_theme') || 'dark');

  // Auto-login if session exists
  const savedKey = getSession();
  if (savedKey && getUserData(savedKey)) {
    state.currentUser = savedKey;
    document.getElementById('topBar').style.display = 'flex';
    const data = getUserData(savedKey);
    const name = data.username || data.email;
    document.getElementById('topBarUser').textContent = `👋 Hi, ${name}`;
    document.getElementById('setupHeading').textContent = `Ready to practice, ${name}?`;
    updateStreak(savedKey);
    refreshStreakBadge(savedKey);
    showScreen('setup-screen');
    populateSetupStats(savedKey);
    populateHistory(savedKey);
  }
})();
