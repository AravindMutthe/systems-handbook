Status: held, privacy private, publication draft, pushed 2026-10-30, no publication, no deploy.
Gaps filled 2026-10-30 from web-verified trusted sources (see Archive), cloud filled the same day from the web. Still held. Filled chapters are verified added content, NOT original handwritten notes.

# Career learning path

One knowledge base, two navigation paths. This path LINKS
to the same underlying notes as the industry path. It does
NOT copy them, and it does NOT create duplicate cards.

Order: Computer architecture → Linux → networking →
virtualization → cloud → containers → Kubernetes →
DevOps → SRE → security.

Chapter template, when content exists: original notes
(first, in archive) + practical layer: commands, diagrams,
troubleshooting, practical exercises, interview questions.
The practical layer is NOT in the original handwritten
notes. It is added, verified content, with labelling only
in archive under R18. Interview questions are never
presented as original-page content.

## Chapters

1. Computer architecture — LINKS: Card C (Sillicon
   product, Market Vendors), Card D (NIC, N/W Device /
   HW + SW / OEM). Status: exists.
2. Linux — LINKS: Card D (kernel stack). Status: FILLED
   2026-10-30, verified from web, see Filled chapters.
   Not an original note, not a new card.
3. Networking — LINKS: Card B (Phone book, Market
   rules, DNS), Card D (NIC and kernel stack, OOB),
   Card G (Govt Network Series). Status: exists.
4. Virtualization — LINKS: Card J (eras, hardware
   controlled / SW). Status: FILLED 2026-10-30,
   verified from web, see Filled chapters.
5. Cloud — LINKS: Card I (Tech leadership Era,
   Internet/web/cloud Era), Card J (Eras UI Frameworks
   + Hardware controlled / SW, mobile & cloud, Cloud
   IAM, API/microservices). Status: FILLED 2026-10-30,
   verified from web, see Filled chapters.
6. Containers — LINKS: Card J only, mention of Kub.
   Status: FILLED 2026-10-30, verified from web,
   see Filled chapters.
7. Kubernetes — LINKS: Card J only, mention of
   Kub + Terra. Status: FILLED 2026-10-30, verified
   from web, see Filled chapters.
8. DevOps — LINKS: none as a handbook card. Status:
   FILLED 2026-10-30, verified from web, see Filled
   chapters. Still NOT a domain: a filled path chapter
   does not create a domain under R16. Do NOT add the
   domain on this path alone.
9. SRE — LINKS: none as a handbook card. Status:
   FILLED 2026-10-30, verified from web, see Filled
   chapters.
10. Security — LINKS: none as a chapter. Regulation /
    approval exists in Cards E and G, but that is not
    a security chapter. Status: FILLED 2026-10-30,
    verified from web, see Filled chapters. The filled
    chapter below is security engineering, not a
    restatement of Cards E/G regulation.

## Filled chapters — verified added content, not original notes

### Linux

Linux is a free and open-source, Unix-like kernel, created
by Linus Torvalds in 1991 and first released in versions
0.01 in September 1991 and 0.02 in October 1991. It is
monolithic in architecture: the whole kernel runs in kernel
space, with a modular design that lets modules load
dynamically. Most of it is written in C, with assembly for
architecture-specific work, and it is provided under the
GNU General Public License version 2. A Linux distribution
bundles this kernel with system software and applications;
Android runs on a modified Linux kernel. The kernel is the
layer that gives programs a hardware abstraction and
handles processes, files, memory, devices, networking and
security enforcement. In this path it sits directly under
Card D: the kernel stack Card D describes is this kind of
stack, running on the hardware Card C describes.

### Virtualization

Virtualization divides physical computing resources into
virtual machines, operating systems, processes or
containers. It began in the 1960s with IBM CP/CMS, where
the control program gave each user a simulated stand-alone
System/360 computer. In hardware virtualization the
physical machine is the host and the virtual machine is
the guest; the software or firmware that creates the
guest is the hypervisor, also called a virtual machine
monitor. Full virtualization runs an unmodified guest
operating system on simulated hardware; paravirtualization
runs a guest that cooperates with the hypervisor through
a modified interface; hardware-assisted virtualization
uses processor extensions (Intel VT-x and AMD-V, from
2005–2006 on x86) so guests run in isolation with little
or no modification. The usual goal is to centralize
administration while improving scalability and hardware
utilization — one physical server consolidating work that
used to need several underused servers.

### Cloud

Cloud computing is, in the International Organization
for Standardization definition, a paradigm for enabling
network access to a scalable and elastic pool of
shareable physical or virtual resources, with self-service
provisioning and administration on demand. The National
Institute of Standards and Technology's five essential
characteristics are on-demand self-service, broad network
access, resource pooling across multiple consumers,
rapid elasticity that appears unlimited to the consumer,
and measured service, where usage is monitored,
controlled and reported. Its history runs from 1960s
time-sharing, through Amazon Web Services in 2002 and
Amazon S3 and EC2 in 2006, to Microsoft Azure in 2010
and the OpenStack project the same year. NIST recognized
three service models: Infrastructure as a Service, where
the consumer runs its own operating systems and
applications on provider infrastructure and patches them;
Platform as a Service, where the provider delivers a
platform (operating system, language runtime, database,
web server) and the consumer controls only its deployed
applications; and Software as a Service, where the
provider installs and operates the application and the
consumer uses it, usually through a browser, on a
pay-per-use or subscription basis. Deployment models are
private cloud (one organization), public cloud (delivered
over the public Internet), and hybrid cloud (public and
private bound together, including cloud bursting to
public resources when demand rises). Responsibility is
shared: the provider is typically responsible for
infrastructure security and physical hardware, while the
customer keeps data encryption, identity and access
management, and application-level security. In this path
cloud sits between virtualization and containers because
it is built on them: IaaS runs virtual machines as guests
under a hypervisor, and Linux containers run in isolated
partitions of a single kernel.

### Containers

Containerization is operating-system-level virtualization:
applications run in isolated user spaces called containers,
and all containers on one machine share a single operating
system kernel. Each container bundles its application with
its libraries and configuration files, so it runs the same
way in different environments, cloud or not. That sharing
is also the trade-off: containers use fewer resources than
virtual machines because there is no guest kernel per
container, but a threat that reaches the shared kernel can
affect the whole containerized system. Docker, first
released in 2013, is the widely used container platform:
Docker Engine runs and manages containers, and on Linux
it uses kernel isolation features (cgroups and namespaces)
and a union filesystem such as OverlayFS. Container
orchestration — scheduling, scaling, repairing and
balancing containers across machines — is mostly done by
Kubernetes and Docker Swarm.

### Kubernetes

Kubernetes, also called K8s, is an open-source container
orchestration system for automating deployment, scaling
and management of containerized applications. It was
originally designed by Google, announced in June 2014,
with version 1.0 in July 2015, and is now maintained by
a worldwide community with the trademark held by the
Cloud Native Computing Foundation. It assembles computers,
virtual machines or bare metal, into a cluster. The
control plane manages the cluster: etcd stores the
cluster's desired state, the API server serves the
Kubernetes API and updates that state, the scheduler
chooses which node an unscheduled pod runs on, and
controllers drive actual state toward desired state (for
example, a ReplicaSet keeping a declared number of pod
copies running, replacing failed ones). Nodes run the
workloads: kubelet keeps containers on its node healthy,
a container runtime (containerd or CRI-O) runs the
containers, and kube-proxy routes traffic to them. The
basic deployable unit is the pod: one or more containers
co-located on one node, sharing an IP address and
context. Namespaces segregate a cluster's resources into
separate collections, for example by team or by
development, test and production.

### DevOps

DevOps is the integration and automation of software
development and information technology operations. It
aims to shorten the development life cycle and improve
it, and it is generally characterized by three principles:
shared ownership, workflow automation, and rapid feedback.
In practice that means automated build and test,
continuous integration and continuous delivery (CI/CD),
and infrastructure and operations work handled as
engineering work, not as hand-offs after coding. The
first conference named DevOpsDays was held in Ghent,
Belgium, in 2009. Delivery is measured, in the DORA
metrics, by deployment frequency, lead time for changes,
change failure rate, and failed deployment recovery time.
DevSecOps is the same practice with security moved
earlier into the life cycle ("shift left"): static
testing, software composition checks against vulnerability
lists, and dynamic testing. DevOps is a set of practices,
a culture change, and tools together — not a single tool,
and not a domain created by this path chapter.

### SRE

Site reliability engineering (SRE) applies software
engineering to infrastructure and operations problems.
It originated at Google, where Benjamin Treynor Sloss
founded the SRE team in 2003. SREs are responsible for
availability, latency, performance, efficiency, change
management, monitoring, emergency response, and capacity
planning for deployed systems. Its practices include
automating repetitive work, designing systems to reduce
risk to availability and latency, observability (the
ability to ask arbitrary questions about a system without
knowing them in advance), and managing toil — manual,
repetitive, automatable operational work. Reliability is
defined and measured with SLIs (what is measured),
SLOs (the target for it), and error budgets (how much
unreliability is allowed before new features pause and
reliability work takes priority). SRE is described as a
specific implementation of DevOps, focused specifically
on building reliable systems, while DevOps covers a
broader scope of operations.

### Security

Computer security, also called cybersecurity or IT
security, is the protection of computer systems and
networks from attack that can lead to unauthorized
information disclosure, theft of, or damage to hardware,
software or data, or to disruption or misdirection of
the services they provide. Its goals are commonly stated
as the CIA triad, introduced in a 1977 NIST publication:
confidentiality, integrity, and availability. A
vulnerability is a weakness in design, implementation,
operation or control; exploitable vulnerabilities are
recorded in the Common Vulnerabilities and Exposures
(CVE) database. Attack types include backdoors, denial
of service (including distributed denial of service),
direct-access attacks by someone with physical access,
eavesdropping, phishing and social engineering, privilege
escalation, spoofing, and tampering. Defenses include
access control and authorization, authentication
(including multi-factor authentication), encryption,
firewalls, intrusion detection, secure coding, and secure
by default and secure by design. This chapter is not
Cards E/G regulation and approval restated: regulation
is governance of a product or network, security
engineering is the technical work of protecting the
system itself.

## Archive — labelling and provenance (R18)

- Path status: proposed navigation view, not a domain,
  not a card set, not a categories.json change. Filled
  chapters do not change that status, and DevOps in
  particular does not become a domain by being filled.
- Existing chapters link to Cards A–K as listed above.
  Filled chapters link as listed above and are verified
  added content, NOT original handwritten notes, NOT
  original-page content, and NOT new handbook cards.
- Verification, 2026-10-30, from the web, not from git:
  the following Wikipedia pages were opened and read
  (not snippets, not repo files, not Atlas): Linux
  kernel; Virtualization; Containerization (computing);
  Kubernetes; DevOps; Site reliability engineering;
  Computer security; Cloud computing. Content above is paraphrased from
  those pages, not copied from them. No content in the
  filled chapters comes from Atlas, and no Atlas file
  was used as a source for any filled chapter.
- No interview questions, no troubleshooting exercises,
  and no command sequences are presented as original
  content in this file, because none were web-verified
  as a set in this turn. Commands named on the pages
  read (kubectl, kubeadm, Docker Engine) are named only
  where the page itself names them.
- Cloud was filled the same day, 2026-10-30, from the
  Cloud computing page listed above, and its chapter
  status is FILLED. No chapter in this file remains a
  gap after this fill.
- When a gap chapter is written, its practical layer
  must be verified claim by claim (verification rule)
  and labelled only here, in archive, not in main text.
  That rule was followed for this fill: every factual
  claim in Filled chapters traces to a page listed above.
