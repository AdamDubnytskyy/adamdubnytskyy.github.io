// Edit this file to change the content of the landing page.

export const site = {
  name: 'Oleh Adam Dubnytskyy',
  title: 'Oleh Adam Dubnytskyy — Platform Engineering, DevOps, SRE',
  description:
    'Platform engineering, DevOps and SRE consultant in Lviv, Ukraine. Amazon EKS upgrades, Kubernetes operations, secure CI/CD and GitOps, Terraform on AWS.',
  url: 'https://adamdubnytskyy.github.io',
  email: 'adam.dubnytskyy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/oleh-adam-dubnytskyy/',
  github: 'https://github.com/AdamDubnytskyy',
  // Calendar booking URL (Cal.com, Google Calendar appointment page...). Empty = link hidden.
  booking: '',
  // Google Analytics 4 Measurement ID, e.g. 'G-XXXXXXXXXX'. Empty = analytics and cookie banner disabled.
  analyticsId: 'G-LPPQLB5V0C',
};

export const expertise = [
  { n: '01', title: 'Platform Engineering', text: 'Product teams get Kubernetes namespaces and CI access on demand, without waiting on ops. Cloud-native services integrated into the cluster and upgraded safely.' },
  { n: '02', title: 'DevOps & CI/CD', text: 'Fast, repeatable and secure releases: automated CI/CD and GitOps delivery that promotes changes across environments with Git as the audit trail (GitHub Actions, Argo CD, Kargo).' },
  { n: '03', title: 'SRE & Observability', text: 'Know about problems before your users do. Metrics, logs and traces that make incidents faster to find and fix (Prometheus, Grafana, Loki, Tempo, OpenTelemetry).' },
  { n: '04', title: 'Cloud & Infrastructure as Code', text: 'Reproducible AWS infrastructure defined as code, so environments stay consistent and reviewable. Autoscaling of workloads and nodes that matches capacity to demand and keeps compute costs down (Terraform, Karpenter, KEDA).' },
  { n: '05', title: 'Kubernetes Operations', text: 'Production clusters that stay supported, stable and off paid extended support: Amazon EKS upgrades and Day-2 Operations.' },
  { n: '06', title: 'Security', text: 'Secure by default: no long-lived cloud credentials, least-privilege access with IAM and Kubernetes RBAC, and network isolation between workloads. Minimal distroless container images shrink the attack surface and cut CVE scanner noise (OIDC, IAM, Kubernetes RBAC, Cilium, Distroless).' },
];

export type PackageGroup = { label?: string; points: string[] };
export type Pkg = {
  tag: string;
  featured: boolean;
  draft?: boolean;
  name: string;
  summary: string;
  options?: { label: string; title: string; text: string; highlight?: boolean }[];
  groups: PackageGroup[];
  price: string;
};

export const packages: Pkg[] = [
  {
    tag: 'PACKAGE 01 · FLAGSHIP',
    featured: true,
    name: 'EKS Cluster Upgrade',
    options: [
      { label: 'OPTION 1', title: 'One Kubernetes version', text: 'A single Kubernetes version upgrade: control plane, add-ons, nodes and every platform component.' },
      { label: 'OPTION 2', title: 'Several Kubernetes cluster version upgrades', text: 'Moving across several versions is a chain of dependent steps. I plan the path and verify component compatibility at every step, so the cluster stays stable all the way to the target version.', highlight: true },
    ],
    summary:
      'End-to-end upgrade of a production Amazon EKS cluster: control plane, add-ons, data plane and every platform component.',
    groups: [
      {
        points: [
          'Upgrade readiness review and plan',
          'Control plane and EKS add-on upgrades',
          'AMD and ARM node group upgrades',
          'Ingress, autoscaling, networking and observability components',
          'GitOps tooling upgrades (Argo CD, Kargo)',
          'Zero-downtime rollout of cluster components',
          'Moves clusters off paid extended support onto current versions',
          'Runbook and handover',
        ],
      },
    ],
    price: 'Fixed price · on request',
  },
  {
    tag: 'PACKAGE 02 · IN TWO PHASES',
    featured: true,
    name: 'Secure CI/CD & GitOps on EKS',
    summary:
      'Pipelines that deploy to EKS without long-lived credentials, then GitOps so every change reaches the cluster through a pull request.',
    groups: [
      {
        label: 'PHASE 1 — CI/CD FOUNDATION',
        points: [
          'GitHub Actions pipelines (migration from GitLab if needed)',
          'Reusable CI container image with AWS CLI and kubectl',
          'Keyless AWS access: OIDC trust between GitHub and AWS',
          'Terraform-managed IAM roles, trust policies and permissions',
          'EKS access entries with scoped Kubernetes RBAC',
          'Self-service namespace onboarding for repositories',
        ],
      },
      {
        label: 'PHASE 2 — GITOPS DELIVERY',
        points: [
          'Argo CD installation and configuration',
          'Namespaces and resources onboarded by pull request',
          'Optional promotion pipelines with Kargo',
        ],
      },
    ],
    price: 'Fixed price · on request',
  },
];

export const layers = [
  { n: '01', title: 'Control plane', text: 'Version upgrade of the managed EKS control plane.', chips: ['EKS control plane'] },
  { n: '02', title: 'Add-ons', text: 'EKS add-ons moved to versions compatible with the new release.', chips: ['EKS managed add-ons'] },
  { n: '03', title: 'Data plane', text: 'Worker nodes upgraded for both architectures, plus serverless Fargate workloads.', chips: ['AMD64 node groups', 'ARM64 node groups', 'AWS Fargate profiles'] },
  {
    n: '04',
    title: 'Cluster components',
    text: 'Platform controllers and operators upgraded in a safe order.',
    chips: [
      'Traefik Ingress Controller', 'Karpenter', 'Cilium operator', 'Elastic Agent DaemonSet → ELK',
      'Argo CD operator', 'Kargo (Akuity)', 'Grafana', 'Prometheus', 'Loki', 'OpenTelemetry',
      'Tempo', 'ExternalDNS', 'AWS Load Balancer Controller',
    ],
  },
];

export const steps = [
  { n: 'STEP 01', title: 'Assess', text: 'Review the current cluster, versions and deprecations.' },
  { n: 'STEP 02', title: 'Plan', text: 'Agree scope, order of changes and how to roll back safely.' },
  { n: 'STEP 03', title: 'Execute', text: 'Change layer by layer, verifying each before the next.' },
  { n: 'STEP 04', title: 'Hand over', text: 'Runbooks and reusable Claude skills so your team can repeat it.' },
];

// Only list active certifications. Each links to its Credly verification page.
export const certifications = [
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'The Linux Foundation',
    url: 'https://www.credly.com/badges/16995c51-b1c9-4363-a065-91396b01dabf/public_url',
    // Official CKAD badge (blue version), self-hosted. Alternatives: ckad-white.svg, ckad-black.svg.
    image: '/badges/ckad-blue.svg',
  },
  {
    name: 'GitOps at Scale',
    issuer: 'Octopus Deploy',
    url: 'https://www.credly.com/badges/808d9098-b587-406c-ad47-fe6812215e2d/public_url',
    image: '/badges/gitops-at-scale.png',
  },
];
